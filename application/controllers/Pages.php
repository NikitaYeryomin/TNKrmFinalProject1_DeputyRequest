<?php
class Pages extends Admin_controller {

    public function view($page = 'home'){
        //$this->load->helper('date');
        
        if (!file_exists(APPPATH.'views/pages/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            show_404();
        }
                
        $this->data['title'] = ucfirst($page); // Capitalize the first letter
        $this->data['inner_view'] = 'pages/'.$page;
        $this->load->view('template', $this->data);
    }
}
?>