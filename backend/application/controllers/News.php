<?php
class News extends Front_controller {

    public function index() {
        echo json_encode(array(
                'error' => 0,
                'News'  => $this->news->get_records()
            ));
    }
    
}
?>