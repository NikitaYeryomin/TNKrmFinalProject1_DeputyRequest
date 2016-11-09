<?php echo validation_errors(); ?>

<?php echo form_open('users/edit/'.$user['userid']); ?>
<fieldset>
    <div class="form-group">
        <input type="input" class="form-control" name="username" placeholder="Username" value="<?= set_value('username') ? set_value('username') : $user['username'] ?>"/>
    </div>
    <div class="form-group">
        <input type="input" class="form-control" name="email" placeholder="Email" value="<?= set_value('email') ? set_value('email') : $user['email'] ?>"/>
    </div>
    <div class="form-group">
        <input type="input" class="form-control" name="phone" placeholder="Phone #" value="<?= set_value('phone') ? set_value('phone') : $user['phone'] ?>"/>
    </div>
    <div class="form-group">
        <input type="password" class="form-control" name="password" placeholder="Password" />
    </div>
    <div class="form-group">
        <input type="password" class="form-control" name="confirm" placeholder="Confirm"/>
    </div>

    <div class="form-group">
        <button class="btn btn-default" type="submit">
            <span aria-hidden="true" class="glyphicon glyphicon-ok"></span>
            <!-- <input type="submit" name="submit" value="Save information" /> -->
            Save Information
        </button>
    </div>
</fieldset>
</form>