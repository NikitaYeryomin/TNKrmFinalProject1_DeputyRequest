<?php
class User_model extends Base_model {
    
    public function set_user($id = NULL){
        
        //getting array of entered data
        $data['username'] = $this->input->post('username');
        $data['email'] = $this->input->post('email');
        $data['phone'] = $this->input->post('phone');
        
        if ($id === NULL)
        {
            //inserting user if it's not exists
            date_default_timezone_set('Europe/Kiev');
            $data['hash'] = password_hash($this->input->post('password'), PASSWORD_DEFAULT);
            $data['joindate'] = date("Y-m-d H:i:s");
            return $this->db->insert('users', $data);
        }
        else
        {
            //updating user's info
            if ($this->input->post('password') != NULL)
            {
                $data['hash'] = password_hash($this->input->post('password'), PASSWORD_DEFAULT);
            }
            return $this->db->update('users', $data, array('userid' => $id));
        }
    }
    
    public function del_user($id){
        return $this->db->delete('users', array('userid' => $id));
    }
    
    /*
    public function sort_users($field, $order = 'ASC'){
        
    }
    */
    
    public function login($data){
        $row = $this->get_records($data['login'], 'email');
        if (password_verify($data['pass'], $row['hash']))
        {
            // remember that user's now logged in by storing user's ID in session
            return $newdata = array(
                'id'        => $row['userid'],
                'username'  => $row['username'],
                'logged'    => TRUE
            );
        }
        else
        {
            //wrong password
            return FALSE;
        }
    }

}
?>