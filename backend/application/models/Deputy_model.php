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
/*
public function set_deputy()
{
    $this->load->helper('url');
    $data = array(        
        'id' => $this->input->post('id'),
        'name' => $this->input->post('name'),
        'surname' => $this->input->post('surname'),
        'patronymic' => $this->input->post('patronymic'),
        'bio' => $this->input->post('bio'),
        'party_id' => $this->input->post('party_id'),
        'tvoid' => $this->input->post('tvoid')
        );
    return $this->db->insert('deputies', $data);
}
 */   
}