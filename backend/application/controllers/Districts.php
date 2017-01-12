<?php
class Districts extends Front_Controller
{
public function full_map()
    {
        $districts = $this->districts->get_districts('fullmap');
        $data['districts'] = $districts;
        $deputies = $this->deputy->get_deputies();
        $data['deputies'] = $deputies;

        $data['error'] = 0;

        foreach ($districts as $k1 => $v1) {
            $districts[$k1]['vertex'] = explode(";", $districts[$k1]['vertex']);
            foreach ($districts[$k1]['vertex'] as $k2 => $v2) {
                $districts[$k1]['vertex'][$k2] = explode(",", $v2);
            }
        }
        $scale = new stdClass();
        $scale->maxlat = $districts[0]['vertex'][0][0];
        $scale->minlat = $districts[0]['vertex'][0][0];
        $scale->maxlon = $districts[0]['vertex'][0][1];
        $scale->minlon = $districts[0]['vertex'][0][1];
        foreach ($districts as $k3 => $v3) {
            foreach ($districts[$k3]['vertex'] as $k4 => $v4) {
                if ($scale->maxlat < $v4[0]) {$scale->maxlat = $v4[0];}
                if ($scale->minlat > $v4[0]) {$scale->minlat = $v4[0];}
                if ($scale->maxlon < $v4[1]) {$scale->maxlon = $v4[1];}
                if ($scale->minlon > $v4[1]) {$scale->minlon = $v4[1];}
            }
        }
        $data['scale'] = $scale;

        $_districts = array();
        foreach ($districts as $k4 => $v4) {
            $vertex = array();
            foreach ($districts[$k4]['vertex'] as $k5 => $v5) {
                $v = new stdClass();
                $v->lat = $v5[0];
                $v->lng = $v5[1];
                $vertex[] = $v;
            }
            $_districts[$k4] = array(
                $districts[$k4]['id'], $vertex, $this->сolorizer(),$districts[$k4]['tvoid']
                );
        }
        $i=1;
        while ($i<count($_districts)) {
            if ($_districts[$i][3]==$_districts[$i-1][3]){$_districts[$i][2]=$_districts[$i-1][2];}
            $i++;
        }    
        $data['districts'] = $_districts;

      $_deputies = array();
        foreach ($deputies as $k => $v) {
            $_deputies[$k]= array(
                'id'=>$deputies[$k]['id'],
                'surname'=>$deputies[$k]['surname'],
                'name'=>$deputies[$k]['name'],
                'patronymic'=>$deputies[$k]['patronymic'],
                'tvoid'=>$deputies[$k]['tvoid']
                );
        }
        $data['deputies'] = $_deputies;

        echo json_encode($data, JSON_NUMERIC_CHECK );
    }

/******************************один участок***********************************************/

public function district($id = NULL)
    {
        $district = $this->districts->get_districts($id);
        $district['vertex'] = explode(";", $district['vertex']);
        foreach ($district['vertex'] as $k => $v) {
                $district['vertex'][$k] = explode(",", $v);
            }
        $extremes = new stdClass();
        $extremes->maxlat = $district['latitude'];
        $extremes->minlat = $district['latitude'];
        $extremes->maxlon = $district['longitude'];
        $extremes->minlon = $district['longitude'];
        foreach ($district['vertex'] as $k => $v) {
            if ($extremes->maxlat < $v[0]) {$extremes->maxlat = $v[0];}
            if ($extremes->minlat > $v[0]) {$extremes->minlat = $v[0];}
            if ($extremes->maxlon < $v[1]) {$extremes->maxlon = $v[1];}
            if ($extremes->minlon > $v[1]) {$extremes->minlon = $v[1];}
            }
        $data['extremes'] = $extremes;
        $vertex = array();
            foreach ($district['vertex'] as $k => $v) {
                $temp = new stdClass();
                $temp->lat = $v[0];
                $temp->lng = $v[1];
                $vertex[] = $temp;
            }
        $district['vertex']=$vertex;
        $data['district'] = $district;
        $deputies = $this->deputy->get_deputies();
        $_deputies = array();
        foreach ($deputies as $k => $v) {
            if ($deputies[$k]['tvoid']==$district['tvoid'])
            {array_push($_deputies,array(
                'id'=>$deputies[$k]['id'],
                'surname'=>$deputies[$k]['surname'],
                'name'=>$deputies[$k]['name'],
                'patronymic'=>$deputies[$k]['patronymic'],
                'tvoid'=>$deputies[$k]['tvoid']
                ));
            }
        }
        $data['deputies'] = $_deputies;
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
    }

public function index()
    {
        $districts = $this->districts->get_districts();
        $data['districts'] = $districts;
        $places = $this->place->get_places();
        $data['places'] = $places;

        $data['error'] = 0;

        foreach ($districts as $k1 => $v1) {
            $districts[$k1]['vertex'] = explode(";", $districts[$k1]['vertex']);
            foreach ($districts[$k1]['vertex'] as $k2 => $v2) {
                $districts[$k1]['vertex'][$k2] = explode(",", $v2);
            }
        }
        $scale = new stdClass();
        $scale->maxlat = $districts[0]['vertex'][0][0];
        $scale->minlat = $districts[0]['vertex'][0][0];
        $scale->maxlon = $districts[0]['vertex'][0][1];
        $scale->minlon = $districts[0]['vertex'][0][1];
        foreach ($districts as $k3 => $v3) {
            foreach ($districts[$k3]['vertex'] as $k4 => $v4) {
                if ($scale->maxlat < $v4[0]) {
                    $scale->maxlat = $v4[0];
                }
                if ($scale->minlat > $v4[0]) {
                    $scale->minlat = $v4[0];
                }
                if ($scale->maxlon < $v4[1]) {
                    $scale->maxlon = $v4[1];
                }
                if ($scale->minlon > $v4[1]) {
                    $scale->minlon = $v4[1];
                }
            }
        }
        $data['scale'] = $scale;

        $_districts = array();
        foreach ($districts as $k4 => $v4) {
            $vertex = array();
            foreach ($districts[$k4]['vertex'] as $k5 => $v5) {
                $v = new stdClass();
                $v->lat = $v5[0];
                $v->lng = $v5[1];
                $vertex[] = $v;
            }
            $_districts[$k4] = array($districts[$k4]['id'], $vertex, $this->сolorizer());
        }
        $data['districts_on_map'] = $_districts;

        $_places = array();
        foreach ($places as $k => $v) {
            $_places[$k]= array($places[$k]['latitude'], $places[$k]['longitude']);
            $vote_places = array();
            foreach ($districts as $k2 => $v2) {
                if ($districts[$k2]['place_id'] == $places[$k]['id']) {
                    $vote_places[] = $districts[$k2]['id'];
                }
            }
            $_places[$k][] = $vote_places;
        }
        $data['places_on_map'] = $_places;

        echo json_encode($data, JSON_NUMERIC_CHECK );
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

public function edit($id = NULL)
    {
        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->load->model('tvo_model');
        if ($id === NULL) {
            show_404();
        } else {
            $data['title'] = 'редагувати виборчу дільницю № ' . $id;
            $data['district'] = $this->districts_model->get_districts($id);
            $data['ids'] = $this->districts_model->get_districts("id");
            $data['places'] = $this->place_model->get_places();
            $data['districts'] = $this->districts_model->get_districts();
            $data['tvo'] = $this->tvo_model->get_tvo();
        }

        $this->form_validation->set_rules('place', 'place', 'required');


        if ($this->form_validation->run() === FALSE) {
            $this->load->view('templates/header', $data);
            $this->load->view('districts/edit', $data);
            $this->load->view('templates/footer');
        } else {
            $this->districts_model->edit_a_district($id);
            $this->load->view('districts/success');
        }
    }

public function delete($id)
    {
        $this->districts_model->delete_district($id);
        redirect('districts');
    }

public function add()
    {
        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->load->model('tvo_model');
        $data['ids'] = $this->districts_model->get_districts("id");
        $data['title'] = 'додати виборчу дільницю';
        $data['places'] = $this->place_model->get_places();
        $data['districts'] = $this->districts_model->get_districts();
        $data['tvo'] = $this->tvo_model->get_tvo();
        $this->form_validation->set_rules('addresses', 'addresses', 'required');
        if ($this->form_validation->run() === FALSE) {
            $this->load->view('templates/header', $data);
            $this->load->view('districts/add');
            $this->load->view('templates/footer');
        } else {
            $this->districts_model->add_district();
            $this->load->view('districts/success');
        }
    }

    public function search()
    {
        $data['title'] = 'визначити виборчу дільницю';
        $this->load->view('templates/header', $data);
        $this->load->view('districts/search');
        $this->load->view('templates/footer');
    }

}