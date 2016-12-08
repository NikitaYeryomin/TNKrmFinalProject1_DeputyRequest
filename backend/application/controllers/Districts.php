<?php
class Districts extends Front_Controller
{
    public function index()
    {
        $data['title'] = 'виборчі дільниці';

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
            $_districts[$k4] = array($districts[$k4]['id'], $vertex, $this->_olorizer());
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

    function _olorizer()
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
        $olor = $r . $g . $b;
        return $olor;
    }

    public function district($id = NULL)
    {
        $data['district'] = $this->districts_model->get_districts($id);
        if (empty($data['district'])) {
            show_404();
        }
        $data['vertex'] = $data['district']['vertex'];
        $data['title'] = 'виборча дільниця № ' . $id;
        $this->load->view('templates/header', $data);
        $this->load->view('districts/district', $data);
        $this->load->view('templates/footer');
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