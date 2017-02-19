<?php
class Place extends Front_Controller
{
 /******************************список***********************************************/
public function index()
    {
        $data['places'] = $this->place->get_places();
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
    }
 
public function save($id){
    $data = array(
                'address' => $this->input->post('address'),
                'latitude'=> $this->input->post('latitude'),
                'longitude'=> $this->input->post('longitude'),
            );
        //print_r($data); 
    if ($id>0){$result = $this->place->edit_a_place($id,$data);}
    else {$result = $this->place->add_a_place($data);}
    if ($result) {echo json_encode(array('error' => 0));}
}
 
public function viewandedit($id)
    {
        $data['place'] = $this->place->get_places($id);
        $data['districts'] = $this->districts->placed_districts($id);
        if (count($data['districts'])>0){$data['disabled']=' disabled';}
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
} 

}