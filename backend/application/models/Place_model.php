<?php
class Place_model extends CI_Model {

public function get_places($id = FALSE)
{
        if ($id === FALSE)
        {
                $query = $this->db->get('places');
                return $query->result_array();
        }
        $query = $this->db->get_where('places', array('id' => $id));
        return $query->row_array();
}

public function add_a_place($data)
{
    return $this->db->insert('places', $data);
}

public function edit_a_place($id = FALSE, $data)
{
  /*$this->load->helper('url');
  $data = array(
        'address' => $this->input->post('address'),
        'latitude' => $this->input->post('latitude'),
        'longitude' => $this->input->post('longitude'),
    );*/
       return     $this->db->update('places', $data, array('id' => $id));
}

public function delete_place($id){return $this->db->delete('places', array('id' => $id));}

}