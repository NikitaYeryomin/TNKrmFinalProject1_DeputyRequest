<?php
class News extends Admin_controller {

    public function index() {
        echo json_encode(array(
                'error' => 0,
                'News'  => $this->news->get_records()
            ));
    }
    
    public function save() {
        $post = array(
            'text' => $this->input->post('text'),
            'date' => date("Y-m-d")
        );
        if ($this->news->set_data(NULL, $post)) {
            echo json_encode(array(
                    'error' => 0
                ));
        }
    }
}
?>