<?php
class Deputy_model extends CI_Model {

public function get_deputies($id = FALSE)
{
        if ($id === FALSE)
        {
$this->db->select(' deputies.*, parties.title AS party FROM deputies INNER JOIN parties ON (deputies.party_id = parties.id)',FALSE);
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
        if ($data['user_id']==0){$data['user_id']=NULL;}
        if (!$id){return $this->db->insert('deputies', $data);}
        return $this->db->update('deputies', $data, array('id' => $id));
}


    
}