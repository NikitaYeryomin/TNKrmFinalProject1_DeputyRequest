<?php
class City extends Front_controller {

    public function index() {
        echo json_encode(array(
                'error' => 0,
                'CityList' => $this->city->get_records()
            ));
    }
    
    public function get($id) {
        if ($id) {
            $result = $this->city->get_records($id);
            if ($result) {
                echo json_encode(array(
                    'error' => 0,
                    'City' => $result
                ));
            }
        } else {
            echo json_encode(array(
                    'error' => 1
                ));
        }
    }
}
?>