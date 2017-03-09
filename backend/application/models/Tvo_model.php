<?php
class Tvo_model extends CI_Model {

public function get_tvo($id = FALSE)
{
        if ($id === FALSE)
        {
                $query = $this->db->get('tvo');
                return $query->result_array();
        }
        $this->db->select('districts.*, places.latitude AS latitude, places.longitude AS longitude, places.address AS address FROM districts INNER JOIN places ON (districts.place_id = places.id) WHERE districts.tvoid='.$id,FALSE);
        $query=$this->db->get();
        return $query->result_array();
}

public function stvo_tvo(){    return $this->db->insert('tvo', array('id' => ''));}

public function view_tvo($id = FALSE)
{
       $query = $this->db->get_where('tvo', array('id' => $id));
        return $query->row_array();
        //return $this->db->query('SELECT * FROM tvo WHERE id='.$id ,FALSE)->result_array();
}

public function setvo($id = NULL, $data){    return $this->db->update('tvo', $data, array('id' => $id));}


}