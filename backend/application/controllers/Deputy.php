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
public function viewandedit($id=NULL)
{
    if ($id>0){
        $deputy = $this->deputy->get_deputies($id);
        $data['deputy'] = $deputy;
    }
    else {
        $data['deputies']=$this->deputy->get_deputies();
        $max_id=1;
    foreach ($data['deputies'] as $value){ if ($max_id<$value['id']) {$max_id=$value['id'];   } }
    $i=1;
    while ($i <= $max_id+1) {
        $fl=0;
        foreach ($data['deputies'] as $value){        if($value['id']==$i){$fl=1; break;}    }
        if    ($fl==0){$min_free_id=$i; break;}
        $i++;    
    }
    $data['new_id'] =  $min_free_id;    
        $data['listtitle']='до міської ради вже пройшли наступні депутати:';
    }
        $tvo = $this->tvo->get_tvo();
        array_push($tvo,array('id'=>'0'));
        foreach ($tvo as $k=>$v){
            $temp = new stdClass();
            $temp->v = $v['id'];
            $temp->t = ($v['id']==0?'лідер партійного списку':$v['id']);
            $tvo[$k]=$temp;
        }
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
                'id'=>$this->input->post('new_id')
                ,'name_gen_case'=>$this->input->post('name_gen_case')
                ,'patronymic_gen_case'=>$this->input->post('patronymic_gen_case')
                ,'surname_gen_case'=>$this->input->post('surname_gen_case')
            );
    //print_r($data); /*
    if ($data['user_id']==0){
        $data['user_id']=NULL;
        if ($this->input->post('ex_user_id')!=NULL){
            $post = array('role'      => 'user');
            $result = $this->user->set_data($this->input->post('ex_user_id'), $post);
        }
    }
    else {
        $post = array('role'      => 'deputy');
        $result = $this->user->set_data($data['user_id'], $post);
    }
    if ($id>0){$result = $this->deputy->set_deputy($id, $data);}
    else {$result = $this->deputy->adddeputy($data);}
    if ($result) {echo json_encode(array('error' => 0));}//*/
}
    
    public function filter_dep() {
        $active = $this->deputy->active_deputies();
        for ($i = 0; $i < count($active); $i++) {
            $active[$i]['reqall'] = $this->request->count(NULL, $active[$i]['id']);
            $active[$i]['answer'] = $this->request->count('answered', $active[$i]['id']);
        }
        //print_r($active);
        echo json_encode(array(
                'error'     => 0,
                'deputies'  => $active
            ));
    }
    
    public function unreg_deputies() {
        echo json_encode(array(
                'error'     => 0,
                'Deputies'  => $this->deputy->unreg_deputies()
            ));
    }
}