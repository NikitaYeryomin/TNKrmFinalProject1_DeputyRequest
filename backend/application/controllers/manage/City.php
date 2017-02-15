<?php
class City extends Admin_controller {

    public function index() {
        $sql = 'SELECT city.*, region.name 
                AS region
                FROM city
                JOIN region ON city.regionid = region.id';
        echo json_encode(array(
                'error' => 0,
                'CityList' => $this->city->sqlexec($sql)
            ));
    }
    
    public function get($id) {
        $sql = 'SELECT city.*, region.name 
                AS region
                FROM city
                JOIN region ON city.regionid = region.id
                WHERE cityid =' . $id;
        $result = $this->city->sqlexec($sql);
        if ($result) {
            echo json_encode(array(
                    'error'     => 0,
                    'City'      => $result[0]
                ));
        } else {
            echo json_encode(array(
                    'error' => 1
                ));
        }
    }
    
    public function save($id) {
        
        echo json_encode(array(
                    'error' => $this->city->set_data($id, array(
                        'active' => $this->input->post('active') ? 1 : 0
                    )) ? 0 : 1
                ));
    }
}
?>