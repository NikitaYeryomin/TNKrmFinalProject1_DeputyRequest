<?php
class Districts_model extends Base_Model {

public function get_districts($id = FALSE)
{
        if ($id === FALSE)
        {
                $query = $this->db->get('districts');
                return $query->result_array();
        }
        if ($id == "fullmap")
        {
                $this->db->order_by('tvoid', 'ASC');
                $query = $this->db->get('districts');
                return $query->result_array();
        }        
        if ($id == "ids")
        {
                $this->db->select('id');
                $query = $this->db->get('districts');
                return $query->result_array();
        }
                if ($id == "fortvo")
        {
            $this->db->select(' districts.id, districts.tvoid FROM districts',FALSE);
            $query=$this->db->get();
            return $query->result_array();
        }
$this->db->select(' districts.*, places.address AS address, places.latitude AS latitude, places.longitude AS longitude FROM districts INNER JOIN places ON (districts.place_id = places.id) WHERE districts.id='.$id,FALSE);
$query=$this->db->get();
                return $query->row_array();
}
 
public function placed_districts($id = FALSE)
{
    if ($id === FALSE){return $query=NULL;}
    else
        {
        $this->db->select('id');
        $this->db->where('place_id', $id);
        $query = $this->db->get('districts');
        return $query->result_array();
        }
}
 
public function edit_a_district($id=FALSE, $data){return $this->db->update('districts', $data, array('id'=>$id));}

public function delete_district($id){return $this->db->delete('districts', array('id' => $id));}

public function add_district($data){return $this->db->insert('districts', $data);}
     
}