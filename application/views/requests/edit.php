<?php echo validation_errors(); ?>

<?php echo form_open('requests/edit/'.$requests_item['requestid']); ?>
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
            <button class="btn btn-default" type="submit">
                <span aria-hidden="true" class="glyphicon glyphicon-envelope"></span>
                Save request
            </button>
        </div>
    </fieldset>
</form>