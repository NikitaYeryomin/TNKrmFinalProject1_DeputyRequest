<?php
class Deputy_model extends CI_Model {

public function get_deputies($id = FALSE)
{
        if ($id === FALSE)
        {
$this->db->select(' deputies.*, parties.title AS party FROM deputies INNER JOIN parties ON (deputies.party_id = parties.id) ORDER BY deputies.tvoid ASC',FALSE);
                $query = $this->db->get();
                return $query->result_array();
        }
$this->db->select(' deputies.*, parties.genitive_case AS party FROM deputies INNER JOIN parties ON (deputies.party_id = parties.id) WHERE deputies.id='.$id ,FALSE);
        $query = $this->db->get();
        return $query->row_array();
}  
public function get_deputies_for_tvo($id = FALSE)
        {
        $this->db->select();
        $this->db->where('tvoid', $id);
        $query = $this->db->get('deputies');
        return $query->result_array();
        }  

public function set_deputy($id = NULL, $data)
{
 return $this->db->update('deputies', $data, array('id' => $id));
}


public function adddeputy($data){return $this->db->insert('deputies', $data);}

public function active_deputies() {
        return $this->db->query('SELECT * FROM deputies WHERE user_id IS NOT NULL')->result_array();
}

public function unreg_deputies() {
        return $this->db->query('SELECT * FROM deputies WHERE user_id IS NULL ORDER BY surname')->result_array();
}

public function deputy_by_userid($userid) {
        return $this->db->query('SELECT * FROM deputies WHERE user_id = ?', array($userid))->result_array();
}
    
}