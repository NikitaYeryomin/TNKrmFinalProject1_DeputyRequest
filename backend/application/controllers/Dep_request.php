<?php
class Dep_request extends Front_controller {

    public function add() {
        $this->data = array(
            'text' => $this->input->post('text'),
            'public_appeal'=> $this->input->post('public_appeal') ? 1 : 0,
            'adddate'  => date("Y-m-d H:i:s"),
        );
        $result = array('error' => 0);
        if (!$this->request->set_data(NULL, $this->data)) {
            $result['error'] = 1;
            $result['message'] = 'Помилка при створенні звернення';
        }
        echo json_encode($result);
    }
    /*
    public function view($id = NULL)
    {
        $this->data['requests_item'] = $this->request->getrequests($id);
        if (empty($this->data['requests_item']))
        {
            show_404();
        }
        $this->data['title'] = $this->data['requests_item']['title'];
        $this->data['inner_view'] = 'request/view';
        $this->load->view('template', $this->data);
    }
        
    public function index()
    {
        $this->data['requests'] = $this->request->getrequests();
        $this->data['title'] = 'Requests archive';
        $this->data['inner_view'] = 'request/index';
        $this->load->view('template', $this->data);
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
    
    public function delete($id)
    {
        $this->request->delete($id);
        redirect('request');
    }
    
    public function filter($class, $id)
    {
        $this->data['requests'] = $this->request->filter_by_class('user', $id);
        $this->data['title'] = 'Requests archive';
        $this->data['inner_view'] = 'request/index';
        $this->load->view('template', $this->data);
    }*/
}
?>