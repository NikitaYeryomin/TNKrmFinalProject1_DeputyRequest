<?php
class Request_model extends Base_model {

    private $sql;
    
    public function __construct() {
        parent::__construct();
        $this->sql = 'SELECT request.*, user.userid, user.firstname, user.secondname, user.lastname, districts.tvoid, deputies.name, deputies.patronymic, deputies.surname, deputies.name_gen_case, deputies.patronymic_gen_case, deputies.surname_gen_case
                    FROM request
                    JOIN user ON user.userid = request.user_id
                    JOIN districts ON districts.id = user.tvo_id
                    JOIN deputies ON deputies.id = request.deputy_id';
    }    
    
    public function getrequests($id = FALSE) {
        if (!$id) {
            $this->sql .= " ORDER BY requestid DESC";
            return $result = $this->db->query($this->sql)->result_array();
        }
        $this->sql .= ' WHERE request.requestid = ? ORDER BY requestid DESC';
        $result = $this->db->query($this->sql, array($id))->result_array();
        if (count($result) > 0) {
            return $result[0];
        }
        return null;
    }
    
    public function get_requests_by_user($id, $role) {
        if (!$id) {
            //TODO: throw 'User id not defined!';
            return null;
        }
        if ($role == 'deputy') {
            $this->sql .= ' WHERE request.deputy_id = ? OR request.reply_deputy_id = ?';
        } else {
            $this->sql .= ' WHERE request.user_id = ?';
        }
        $this->sql .= " ORDER BY requestid DESC";
        //print($this->sql);
        if ($role == 'deputy') {
            $result = $this->db->query($this->sql, array($id, $id))->result_array();
        } else {
            $result = $this->db->query($this->sql, array($id))->result_array();
        }
        return $result;
    }
    
    public function filter_by_class($class, $id)
    {
        $this->sql .= ' AND t1.' . $class . '_id = ?';
        $result = $this->db->query($this->sql, array($id))->result_array();
        if (count($result) > 0)
        {
            return $result;
        }
        return null;
    }
    
    public function editrequest($id = FALSE, $post) {
        if (!$id) {
            return $this->db->insert('request', $post);
        }
        return $this->db->update('request', $post, array('requestid' => $id));
    }
    
    public function count($state = NULL, $id = NULL) {
        $sql = "SELECT COUNT(*) FROM request";
        if ($state) {
            $sql .= " WHERE status = '" . $state ."'";
            if ($id) {
                $sql .= " AND ";
            }
        }
        if ($id) {
            if (!$state) {
                $sql .= " WHERE ";
            }
            $sql .= "(deputy_id = " . $id . " OR reply_deputy_id = " . $id . ")";
        }
        if (!$state && !$id) {
            $sql .= " WHERE ";
        } else {
            $sql .= " AND ";
        }
        $sql .= "public_appeal = 1";
        $result = $this->db->query($sql)->result_array();
        return $result[0]['COUNT(*)'];
    }
    
    public function getall($state = NULL) {
        if ($state) {
            $this->sql .= " WHERE status = '" . $state ."'";
        }
        $this->sql .= "ORDER BY requestid DESC";
        return $result = $this->db->query($this->sql)->result_array();
    }
}
?>