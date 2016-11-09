<?php
class Pages extends CI_Controller {

        public function view($page = 'home')
        {
                //$this->load->helper('date');
                
                if (!file_exists(APPPATH.'views/pages/'.$page.'.php'))
                {
                        // Whoops, we don't have a page for that!
                        show_404();
                }
                
                $data['title'] = ucfirst($page); // Capitalize the first letter
                $data['inner_view'] = 'pages/'.$page;
                $this->load->view('template', $data);
                /*
                $this->load->view('templates/header', $data);
                $this->load->view('pages/'.$page, $data);
                $this->load->view('templates/footer', $data);
                */
        }
}
?>