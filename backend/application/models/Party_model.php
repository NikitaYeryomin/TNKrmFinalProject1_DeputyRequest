<?php
class Party_model extends CI_Model {

public function get_parties($id = FALSE)
{
        if ($id === FALSE)
        {
            $query = $this->db->get('parties');
            return $query->result_array();
        }

        $query = $this->db->get_where('parties', array('id' => $id));
        return $query->row_array();
} 

}