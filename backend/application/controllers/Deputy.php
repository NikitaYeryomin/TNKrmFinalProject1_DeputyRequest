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
            if ($deputies[$k]['user_id']!=null){$deputies[$k]['user_id']='зареєстрован';}
        array_push($_deputies,array(
                'id'=>$deputies[$k]['id'],
                'surname'=>$deputies[$k]['surname'],
                'name'=>$deputies[$k]['name'],
                'patronymic'=>$deputies[$k]['patronymic'],
                'tvoid'=>$deputies[$k]['tvoid'],
                'user_id'=>$deputies[$k]['user_id'],
                'party'=>$deputies[$k]['party']                
                ));
        }
        $data['deputies'] = $_deputies;
        $data['error'] = 0;
        echo json_encode($data,JSON_NUMERIC_CHECK);
    }
}