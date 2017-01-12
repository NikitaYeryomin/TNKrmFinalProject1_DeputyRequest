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
 
}