<?php
class User extends Front_controller {
    
    public function login(){
        $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
        $this->form_validation->set_rules('password', 'Password', 'required');
        if ($this->form_validation->run() === FALSE)
        {
            echo json_encode(array(
                'error'     => 1,
                'message'   => 'validation_error',
                'data'      => $this->form_validation->error_array()
            ));
        }
        else
        {
            $this->data = array(
                'email'     => $this->input->post('email'),
                'pass'      => $this->input->post('password')
            );
            $result = $this->user->login($this->data);
            if ($result)
            {
                $this->session->set_userdata('logged_in', $result);
                $this->data['username'] = $result['username'];
                echo json_encode(array(
                    'error'       => 0,
                    'currentUser' => $result
                ));
            }
            else
            {
                echo json_encode(array(
                    'error'   => 1,
                    'message' => 'Incorrect username and/or password!'
                ));
            }
        }
    }

    public function _logout(){
        $this->session->unset_userdata('logged_in');
        $this->session->sess_destroy();
    }

    public function logout(){
        $this->_logout();
        echo json_encode(array(
            'error' => 0,
        ));
    }

    public function current() {
        $logged_in = $this->session->userdata('logged_in');
        if ($logged_in) {
            echo json_encode(array('error' => 0, 'currentUser' => $logged_in));
        }
        else {
            echo json_encode(array('error' => 0, 'currentUser' => null));
        }
    }

    public function register() {
        $this->data = array(
            'firstname' => $this->input->post('firstname'),
            'secondname'=> $this->input->post('secondname'),
            'lastname'  => $this->input->post('lastname'),
            'email'     => $this->input->post('email'),
            'phone'     => $this->input->post('phone'),
            'city_id'   => $this->input->post('city_id'),
            'tvoid'     => $this->input->post('tvo_id'),
            'street'    => $this->input->post('street'),
            'home'      => $this->input->post('home'),
            'hash'      => password_hash($this->input->post('password'), PASSWORD_DEFAULT),
            'joindate'  => date("Y-m-d H:i:s"),
        );
        if ($this->user->set_data(NULL, $this->data)) {
            $data['password'] = $this->input->post('password');
            $this->login();
        }
    }
    
    public function get($id) {
        $sql = 'SELECT user.*, city.city 
                FROM user
                JOIN city ON user.city_id = city.cityid
                WHERE userid =' . $id;
        $result = $this->user->sqlexec($sql);
        if ($result) {
            $districts = $this->user->sqlexec('SELECT tvoid, place_id FROM districts WHERE id = ' . $result[0]['tvo_id']);
            $deputies = $this->user->sqlexec('SELECT * FROM deputies WHERE tvoid = ' . $districts[0]['tvoid']);
            $places = $this->user->sqlexec('SELECT address FROM places WHERE id = ' . $districts[0]['place_id']);
            echo json_encode(array(
                    'error'     => 0,
                    'User'      => $result[0],
                    'District'  => $districts[0],
                    'Deputy'    => $deputies[0],
                    'Place'     => $places[0]
                ));
        } else {
            echo json_encode(array(
                    'error' => 1
                ));
        }
    }
}
?>