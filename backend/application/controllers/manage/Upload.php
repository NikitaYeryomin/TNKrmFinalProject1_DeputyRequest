<?php
class Upload extends Admin_controller {
    
    public function __construct() {
        parent::__construct();
        $this->load->helper(array('form', 'url'));
    }
    
    public function uploadCityThemes($type) {
        $id = $this->input->post('id');
        $config['upload_path']      = '/home/ubuntu/workspace/img/';
        $config['allowed_types']    = 'jpg';
        $config['max_size']         = 512;
        $config['max_width']        = 1920;
        $config['max_height']       = 1080;
        $config['file_ext_tolower'] = TRUE;
        $config['file_name']        = $type . ' ' . $id;
        $config['overwrite']        = TRUE;
        $this->load->library('upload', $config);
        if ($this->upload->do_upload($type)) {
            echo json_encode(array(
                    'error'       => 0,    
                    'upload_data' => $this->upload->data()
                ));
        } else {
            echo json_encode(array(
                    'error'   => 1,    
                    'message' => $this->upload->display_errors()
                ));
        }
    }

    public function uploadDeputyFace($type) {
        $id = $this->input->post('id');
        $config['upload_path']      = '/home/ubuntu/workspace/img/deputies/';
        $config['allowed_types']    = 'jpg';
        $config['max_size']         = 512;
        $config['max_width']        = 1920;
        $config['max_height']       = 1080;
        $config['file_ext_tolower'] = TRUE;
        $config['file_name']        = $id;
        $config['overwrite']        = TRUE;
        $this->load->library('upload', $config);
        if ($this->upload->do_upload($type)) {
            echo json_encode(array(
                    'error'       => 0,    
                    'upload_data' => $this->upload->data()
                ));
        } else {
            echo json_encode(array(
                    'error'   => 1,    
                    'message' => $this->upload->display_errors()
                ));
        }
    }
    
}
?>