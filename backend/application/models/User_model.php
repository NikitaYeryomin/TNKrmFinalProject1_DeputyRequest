<?php
class User_model extends Base_model {
    
    public function set_user($id = NULL, $post){
        
        if (!$id) {
            return $this->db->insert('users', $post);
        }
        return $this->db->update('users', $post, array('userid' => $id));
    }
    
    public function login($data){
        $row = $this->get_records($data['email'], 'email');
        if (password_verify($data['pass'], $row['hash']))
        {
            return array(
                'id'        => $row['userid'],
                'username'  => fullname($row),
                'role'      => $row['role'],
                'cityid'    => $row['city_id']
            );
        }
        return FALSE;
    }

    public function get_users()
    {
        $query = $this->db->get('user');
        return $query->result_array();
    }

}
?>