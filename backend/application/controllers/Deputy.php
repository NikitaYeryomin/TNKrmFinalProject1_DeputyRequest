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
public function edit($id = NULL)
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
        array_unshift($users,array('userid'=>null));
        $data['users']=$users;
        echo json_encode($data);
    }
    
}