<?php
class Request extends Admin_controller {

    public function get($id = NULL) {
        $this->data['requests_item'] = $this->request->getrequests($id);
        $request = $this->data['requests_item'];
        $result = array('error' => 0);
        if (empty($request)) {
            $result['error'] = 1;
            $result['message'] = 'Помилка завантаження звернення';
        } else {
            $result['Request'] = $request;
            $result['Types'] = $this->request->sqlexec("SHOW COLUMNS FROM request WHERE field = 'type'");
            $result['States'] = $this->request->sqlexec("SHOW COLUMNS FROM request WHERE field = 'status'");
        }
        echo json_encode($result);
    }
        
    public function index() {
        echo json_encode(array(
            'error' => 0,
            'Requests' => $this->request->getrequests()
        ));
    }
    
    public function save($id) {
        $post = array(
                'status'        => $this->input->post('status'),
                'type'          => $this->input->post('type'),
                'text'          => $this->input->post('text'),
                'response'      => $this->input->post('response'),
                'public_appeal' => $this->input->post('public_appeal')
            );
        $result = $this->request->set_data($id, $post);
        if ($result) {
            echo json_encode(array(
                    'error' => 0
                ));
        }
    }
        
    public function edit($id = FALSE){
        
        $this->load->helper('form');
        $this->load->library('form_validation');
        $this->form_validation->set_rules('title', 'Title', 'required');
        $this->form_validation->set_rules('text', 'Text', 'required');
        if ($id)
        {
            $this->data['requests_item'] = $this->request->getrequests($id);
            if (empty($this->data['requests_item']))
            {
                show_404();
            }
            $this->data['title'] = 'Edit request №:'.$id;
        }
        else
        {
            $this->data['title'] = 'Create a request';
            $this->data['requests_item'] = NULL;
        }
        if ($this->form_validation->run() === FALSE)
        {
            $this->data['inner_view'] = 'request/edit';
            $this->load->view('template', $this->data);
        }
        else
        {
            $logged_in = $this->session->userdata('logged_in');
            $post = array(
                'title'   => $this->input->post('title'),
                'text'    => $this->input->post('text'),
                'user_id' => $logged_in['id']
            );
            if (!$id)
            {
                $post['adddate'] = date("Y-m-d H:i:s");
            }
            if ($id)
            {
                $post['status'] = $this->input->post('status');
            }
            $this->request->set_data($id, $post);
            redirect('request');
        }
    }
    
    public function delete($id) {
        if ($this->request->delete($id)) {
            echo json_encode(array(
                    'error' => 0
                ));
        } else {
            echo json_encode(array(
                    'error' => 1,
                    'message' => 'Error deleting request'
                ));
        }
    }
    
    public function filter($class, $id) {
        $this->data['requests'] = $this->request->filter_by_class('user', $id);
        $this->data['title'] = 'Requests archive';
        $this->data['inner_view'] = 'request/index';
        $this->load->view('template', $this->data);
    }
}
?>