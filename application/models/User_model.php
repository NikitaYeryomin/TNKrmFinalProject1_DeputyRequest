<?php
class User_model extends Base_model {
    
    public function set_user($id = NULL, $post){
        
        if (!$id)
        {
            return $this->db->insert('users', $post);
        }
        return $this->db->update('users', $post, array('userid' => $id));
    }
    
    public function login($data){
        $row = $this->get_records($data['email'], 'email');
        if (password_verify($data['pass'], $row['hash']))
        {
            // remember that user's now logged in by storing user's ID in session
            return $newdata = array(
                'id'        => $row['userid'],
                'username'  => fullname($row),
                'logged'    => TRUE
            );
        }
        return FALSE;
    }

}
?>