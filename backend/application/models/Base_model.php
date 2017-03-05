<?php
class Base_model extends CI_Model {
    
    private $table;
    private $id_field;
    
    public function __construct(){
        
        $class = str_replace('_model','', strtolower(get_class($this)));
        $this->table = $class;
        $this->id_field = $class.'id';
    }
    
    public function sqlexec($sql) {
        return $query = $this->db->query($sql)->result_array();
    }

    public function get_records($str = NULL, $field = NULL) {
        
        if ($field == NULL) {
            $field = $this->id_field;
        }
        if ($str == NULL) {
            $query = $this->db->get($this->table);
            return $query->result_array();
        }
        $query = $this->db->get_where($this->table, array($field => $str));
        
        return $query->row_array();
    }
    
    public function set_data($id = NULL, $post){
        
        if (!$id) {
            return $this->db->insert($this->table, $post);
        }
        return $this->db->update($this->table, $post, array($this->id_field => $id));
    }
    
    public function delete($id){
        return $this->db->delete($this->table, array($this->id_field => $id));
    }
    
    public function get_last() {
        $result = $this->db->query(
                'SELECT ' . $this->table . '.' . $this->id_field . ' FROM ' . $this->table . ' ORDER BY ' . $this->id_field . ' DESC LIMIT 1'
            )->result_array();
        return $result[0][$this->id_field];
    }
}
?>