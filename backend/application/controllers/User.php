<?php
class User extends Front_controller {
    
    public function login() {
        $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
        $this->form_validation->set_rules('password', 'Password', 'required');
        if ($this->form_validation->run() === FALSE) {
            echo json_encode(array(
                'error'     => 1,
                'message'   => 'validation_error',
                'data'      => $this->form_validation->error_array()
            ));
        } else {
            $this->data = array(
                'email'     => $this->input->post('email'),
                'pass'      => $this->input->post('password')
            );
            $result = $this->user->login($this->data);
            if ($result) {
                $this->session->set_userdata('logged_in', $result);
                $this->data['username'] = $result['username'];
                echo json_encode(array(
                    'error'       => 0,
                    'currentUser' => $result
                ));
            } else {
                echo json_encode(array(
                    'error'   => 1,
                    'message' => "Помилкове ім'я користувача та/або пароль!"
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
        //form validation
        $this->form_validation->set_rules('firstname', "Ім'я", "required|regex_match[/^[А-ЯЁҐЄІЇ]{1}[\D]+$/]",
            array(
                'required' => 'Ви повинні вказати %s',
                'regex_match'=> 'Повинне починатися з великої літери і бути написано кирилицею'
            ));
        $this->form_validation->set_rules('secondname', "По батькові", "required|regex_match[/^[А-ЯЁҐЄІЇ]{1}[\D]+$/]",
            array(
                'required' => 'Ви повинні вказати %s',
                'regex_match'=> 'Повинне починатися з великої літери і бути написано кирилицею'
            ));
        $this->form_validation->set_rules('lastname', "Прізвище", "required|regex_match[/^[А-ЯЁҐЄІЇ]{1}[\D]+$/]",
            array(
                'required' => 'Ви повинні вказати %s',
                'regex_match'=> 'Повинне починатися з великої літери і бути написано кирилицею'
            ));
        $this->form_validation->set_rules('email', 'Email', 'required|valid_email|is_unique[user.email]',
            array(
                'required' => 'Ви повинні вказати %s',
                'is_unique'=> 'Цей %s вже зареєстровано'
            ));
        $this->form_validation->set_rules('street', "Вулиця", 'required');
        $this->form_validation->set_rules('home', "Будинок", 'required|is_natural_no_zero', 
            array(
                'required' => 'Ви повинні вказати %s',
                'is_natural_no_zero' => 'Має бути ціле число більше 0'
            ));
        $this->form_validation->set_rules('password', "Пароль", 'required|min_length[6]|max_length[12]',
            array(
                'required' => 'Ви повинні вказати %s',
                'min_length'=> 'Мінімум 6 символів',
                'max_length'=> 'Максимум 12 символів'
            ));
        $this->form_validation->set_rules('passconfirm', "Підтвердження паролю", 'required|matches[password]',
            array(
                'required' => 'Ви повинні вказати %s',
                'matches'=> 'Має співпадати з паролем'
            ));
        if ($this->form_validation->run()) {
            $this->data = array(
                'firstname' => $this->input->post('firstname'),
                'secondname'=> $this->input->post('secondname'),
                'lastname'  => $this->input->post('lastname'),
                'email'     => $this->input->post('email'),
                //'phone'     => $this->input->post('phone'),
                'city_id'   => $this->input->post('city_id'),
                'tvo_id'    => $this->input->post('tvo_id'),
                'street'    => $this->input->post('street'),
                'home'      => $this->input->post('home'),
                'hash'      => password_hash($this->input->post('password'), PASSWORD_DEFAULT),
                'joindate'  => date("Y-m-d H:i:s")
            );
            if ($this->user->set_data(NULL, $this->data)) {
                $data['password'] = $this->input->post('password');
                //send notification to user
                $this->_send_email_upon_registration($this->input->post('email'),
                    $this->input->post('firstname'), $this->input->post('secondname'));
                $this->login();
            } 
        } else {
            echo json_encode(array(
                'error'     => 1,
                'messages'   => $this->form_validation->error_array()
            ));
        }
    }

    private function _send_email_upon_registration($email, $firstname, $secondname) {
        $mail_data = array(
            'username' => $firstname . ($secondname ? ' '.$secondname : '')
        );
        $this->mailer->send($email, 'Завершення реєстрації на сайті e-city.org.ua',
            'email_templates/account_registered', $mail_data);
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
    
    public function get_deputy($id) {
        if ($id) {
            $result = $this->user->sqlexec('SELECT deputies.id FROM deputies WHERE deputies.user_id = ' . $id);
            if ($result) {
                echo json_encode(array(
                        'error'  => 0,
                        'dep_id' => $result[0]['id']
                    ));
            } else {
                echo json_encode(array(
                    'error' => 1,
                    'message' => 'User is not deputy'
                ));    
            }
        }
    }
    
    public function register_deputy() {
        $deputy = $this->deputy->get_deputies($this->input->post('depid'));
        $this->data = array(
            'firstname' => $deputy['name'],
            'secondname'=> $deputy['patronymic'],
            'lastname'  => $deputy['surname'],
            'email'     => $this->input->post('email'),
            'city_id'   => $this->input->post('city_id'),
            'hash'      => password_hash($this->input->post('password'), PASSWORD_DEFAULT),
            'joindate'  => date("Y-m-d H:i:s"),
            'role'      => 'deputy'
        );
        if ($this->user->set_data(NULL, $this->data)) {
            $deputy = array();
            $deputy['user_id'] = $this->user->get_last();
            //$this->deputy->set_deputy($this->input->post('depid'), $deputy);
            $data['password'] = $this->input->post('password');
            $this->login();
        }
    }
}
?>