<?php
class Deputy extends Front_Controller
{
/******************************один депутат***********************************************/
public function id($id = NULL)
    {
        $deputy = $this->deputy->get_deputies($id);
        $data['deputy'] = $deputy;
        $data['error'] = 0;
        echo json_encode($data);
    }
/******************************список депутатов***********************************************/
public function index()
    {
        $deputies = $this->deputy->get_deputies();
        $_deputies = array();
        foreach ($deputies as $k => $v) {
            if ($deputies[$k]['user_id']!=null){$deputies[$k]['registered']='зареєстрован';}
            else {$deputies[$k]['registered']=null;}
        array_push($_deputies,array(
                'id'=>$deputies[$k]['id'],
                'surname'=>$deputies[$k]['surname'],
                'name'=>$deputies[$k]['name'],
                'patronymic'=>$deputies[$k]['patronymic'],
                'tvoid'=>$deputies[$k]['tvoid'],
                'user_id'=>$deputies[$k]['user_id'],
                'registered'=>$deputies[$k]['registered'],
                'party'=>$deputies[$k]['party']                
                ));
        }
        $data['deputies'] = $_deputies;
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
    }
    
/******************************редактировать депутата***********************************************/
public function viewandedit($id)
    {
        $deputy = $this->deputy->get_deputies($id);
        $data['deputy'] = $deputy;
        $tvo = $this->tvo->get_tvo();
        array_push($tvo,array('id'=>'0'));
        $data['tvo']=$tvo;
        $parties=$this->party->get_parties();
        $data['parties']=$parties;
        $data['error'] = 0;
        $data['sexes']=array(array('id'=>'m','text'=>'чоловіча'),array('id'=>'f','text'=>'жіноча'));
        $users=$this->user->get_users();
        array_unshift($users,array('userid'=>null,'firstname'=>'ні'));
        $data['users']=$users;
        echo json_encode($data);
    }

public function editandsave($id){
    $data = array(
                'surname' => $this->input->post('surname'),
                'name'=> $this->input->post('name'),
                'patronymic'=> $this->input->post('patronymic'),
                'user_id'=> $this->input->post('user_id'),
                'bio'=> $this->input->post('bio'),
                'party_id'=> $this->input->post('party_id'),
                'tvoid'=> $this->input->post('tvoid'),
                'sex'=> $this->input->post('sex'),
                'function'=> $this->input->post('function'),
                'reception'=> $this->input->post('reception'),
            );
        $result = $this->deputy->set_deputy($id, $data);
        //print_r($data); 
        if ($result) {echo json_encode(array('error' => 0));}
}

   
}