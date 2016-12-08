<?php echo validation_errors(); ?>

<?php echo form_open('users/create'); ?>
<table>
    <tr>
        <td>
            <label for="username">User Name</label>
        </td>
        <td>
            <input type="input" name="username" />
        </td>
    </tr>
    <tr>
        <td>
            <label for="email">E-Mail</label></td>
        <td>
            <input type="input" name="email" />
        </td>
    </tr>
    <tr>
        <td>
            <label for="password">Password</label>
        </td>
        <td>
            <input type="password" name="password" />
        </td>
    </tr>
    <tr>
        <td>
            <label for="confirm">Confirm password</label>
        </td>
        <td>
            <input type="password" name="confirm" />
        </td>
    </tr>
</table>

    <input type="submit" name="submit" value="Save information" />

</form>