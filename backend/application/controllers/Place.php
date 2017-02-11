<?php
class Place extends Front_Controller
{
 /******************************список***********************************************/
public function index()
    {
        $places = $this->place->get_places();
        //print_r($places);
        $data['places'] = $places;
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
    }
 
public function add(){
    $data = array(
                'address' => $this->input->post('address'),
                'latitude'=> $this->input->post('latitude'),
                'longitude'=> $this->input->post('longitude'),
            );
        //$result = $this->deputy->add_a_place($data);
       print_r($data); 
        //if ($result) {echo json_encode(array('error' => 0));}
}
    
}