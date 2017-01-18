<?php
class User extends Admin_controller {
/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/
    public function index(){
        echo json_encode(array(
                'error'    => 0,
                'UserList' => $this->user->get_records(),
                'CityList' => $this->city->get_records()
            ));
    }
    
    public function get($id) {
        $result = $this->user->get_records($id);
        if ($result) {
            echo json_encode(array(
                    'error'    => 0,
                    'User'     => $result,
                    'CityList' => $this->city->get_records(),
                    'Roles'    => $this->user->sqlexec("SHOW COLUMNS FROM user WHERE field = 'role'")
                ));
        } else {
            echo json_encode(array(
                    'error'    => 1
                ));
        }
    }
    
    public function save($id) {
        $post = array(
                'firstname' => $this->input->post('firstname'),
                'secondname'=> $this->input->post('secondname'),
                'lastname'  => $this->input->post('lastname'),
                'email'     => $this->input->post('email'),
                'phone'     => $this->input->post('phone'),
                'city_id'   => $this->input->post('city_id'),
                'street'    => $this->input->post('street'),
                'home'      => $this->input->post('home'),
                'role'      => $this->input->post('role')
            );
        if ($this->input->post('password')) {
            $post['hash'] = password_hash($this->input->post('password'), PASSWORD_DEFAULT);
        }
        $result = $this->user->set_data($id, $post);
        if ($result) {
            echo json_encode(array(
                    'error' => 0
                ));
        }
    }
    
    public function delete($id){
        $logged_in = $this->session->userdata('logged_in');
        if ($id == $logged_in['id']) {
            $this->logout();
        }
        $this->user->delete($id);
    }
    
    public function login(){
        $this->data['title'] = 'User login';
        $this->form_validation->set_rules('email', 'Email', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');
        $this->data['inner_view'] = 'user/login';
        if ($this->form_validation->run() === FALSE) {
            $this->load->view('template', $this->data);
        } else {
            $this->data = array(
                'email' => $this->input->post('email'),
                'pass'  => $this->input->post('password')
            );
            $result = $this->user->login($this->data);
            if ($result) {
                $this->session->set_userdata('logged_in', $result);
                $this->data['username'] = $result['username'];
                $this->data['logged'] = $result['logged'];
                redirect('user');
            }
            else {
                sorry('Incorrect username and/or password');
            }
        }
    }
}
?>