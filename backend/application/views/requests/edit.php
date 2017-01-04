<?php echo validation_errors(); ?>

<?php echo form_open('request/edit/'.$requests_item['requestid']); ?>
    <fieldset>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="input" class="form-control" placeholder="Title" name="title" value="<?= set_value('title') ? set_value('title') : $requests_item['title'] ?>"/>
        </div>
        <div class="form-group">
            <label for="text">Text</label>
            <textarea class="form-control" placeholder="Text" name="text"><?= set_value('text') ? set_value('text') : $requests_item['text'] ?></textarea>
        </div>
        <div class="form-group">
            <label for="sel1">Status:</label>
            <select name="status" class="form-control" id="sel1" value="<?= set_value('status') ? set_value('status') : $requests_item['status'] ?>">
                <option value="1" <?php if ($requests_item['status'] == 1) echo 'selected'?>>New</option>
                <option value="2" <?php if ($requests_item['status'] == 2) echo 'selected'?>>Answered</option>
                <option value="3" <?php if ($requests_item['status'] == 3) echo 'selected'?>>Rejected</option>
            </select>
        </div>
        <div class="form-group">
            <button class="btn btn-default" type="submit">
                <span aria-hidden="true" class="glyphicon glyphicon-envelope"></span>
                Save request
            </button>
        </div>
    </fieldset>
</form>