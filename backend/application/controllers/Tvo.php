<?php
class Tvo extends Front_Controller
{
/******************************один ТВО***********************************************/
public function id($id = NULL)
    {
        $districts = $this->tvo->get_tvo($id);
        foreach ($districts as $k1 => $v1) {
            $districts[$k1]['vertex'] = explode(";", $districts[$k1]['vertex']);
            foreach ($districts[$k1]['vertex'] as $k2 => $v2) {
                $districts[$k1]['vertex'][$k2] = explode(",", $v2);
            }
        }
        $extremes = new stdClass();
        $extremes->maxlat = $districts[0]['vertex'][0][0];
        $extremes->minlat = $districts[0]['vertex'][0][0];
        $extremes->maxlon = $districts[0]['vertex'][0][1];
        $extremes->minlon = $districts[0]['vertex'][0][1];
        foreach ($districts as $k3 => $v3) {
            foreach ($districts[$k3]['vertex'] as $k4 => $v4) {
                if ($extremes->maxlat < $v4[0]) {
                    $extremes->maxlat = $v4[0];
                }
                if ($extremes->minlat > $v4[0]) {
                    $extremes->minlat = $v4[0];
                }
                if ($extremes->maxlon < $v4[1]) {
                    $extremes->maxlon = $v4[1];
                }
                if ($extremes->minlon > $v4[1]) {
                    $extremes->minlon = $v4[1];
                }
            }
        }
        $data['extremes'] = $extremes;
        $_districts = array();
        foreach ($districts as $k4 => $v4) {
            $vertex = array();
            foreach ($districts[$k4]['vertex'] as $k5 => $v5) {
                $temp = new stdClass();
                $temp->lat = $v5[0];
                $temp->lng = $v5[1];
                $vertex[] = $temp;
            }
            $_districts[$k4] = array(
                'id'=>$districts[$k4]['id'], 
                'address'=>$districts[$k4]['address'], 
                'latitude'=>$districts[$k4]['latitude'], 
                'longitude'=>$districts[$k4]['longitude'], 
                'addresses'=>$districts[$k4]['addresses'], 
                'vertex'=>$vertex, 
                'color'=>$this->сolorizer()
                );
        }
        
        $data['districts'] = $_districts;
        $places = $this->place->get_places();
        $data['places'] = $places;
        $deputies = $this->deputy->get_deputies_for_tvo($id);
        $data['deputies'] = $deputies;
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
    }

function сolorizer()
    {
        $flag = 0;
        $hex = array('0', '1', '2', '3', '4', '5', '6', '7', '8', 'A', 'B', '9', 'C', 'D', 'E', 'F');
        $r = $hex[rand(0, 15)];
        if ($r == 'C' || $r == 'D' || $r == 'E' || $r == 'F' || $r == '9') {
            $flag = 1;
        }
        $g = $hex[rand(0, 15)];
        if ($r == 'C' || $r == 'D' || $r == 'E' || $r == 'F' || $r == '9') {
            $flag += 1;
        }
        if ($flag < 2) {
            $b = $hex[rand(0, 15)];
        } else {
            $b = $hex[rand(0, 10)];
        }
        $сolor = '#'.$r . $g . $b;
        return $сolor;
    }

public function all()
{
        $data['tvo'] = $this->tvo->get_tvo();
        $data['districts'] = $this->districts->get_districts('fortvo');
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);    
}

public function delete($id)
    {
        $this->districts_model->delete_district($id);
        redirect('districts');
    }

public function add()
    {
    $this->tvo->stvo_tvo();
    $data['error'] = 0;
    //redirect('tvo');
    }    

}