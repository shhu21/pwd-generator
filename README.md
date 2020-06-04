# Password Generator

# Objective
Get criteria from the user and generate a randomized password. </br> </br>
__Criteria:__
- Password Length </br> </br>
__*Character Criteria*__ </br>
- Lowercase Alphabet
- Uppercase Alphabet
- Numeric Characters
- Special Characters

## Functionality

### generatePassword()
__Parameters:__ None. </br>
__Return Type:__ String.
__Purpose:__ Generates a randomized password based on the user's chosen critiera. </br>
__Functionality:__ Calls setConditions(). While the length of `password.pwd` is shorter than the target length (`password.len`) iterate through array `password.options`.  If it is a chosen character criteria (i.e. the index returns `true` or `1`), then it chooses a random character from the chosen character criteria and appends it to `password.pwd`. </br>
__Declared Variables:__ </br>
-`characters` </br>
> __Data Type:__ Array. </br>
> __Purpose:__ Stores static strings of each character criteria.

</br>

### Helper Functions

### setConditions()
__Parameters:__ None. </br>
__Return Type:__ Void. </br>
__Purpose:__ Get the desired criteria from the user. </br>
__Functionality:__ `reset()` to reset any exisiting values in `password`.  Then, prompts the user for a password length, which is converted to an integer value and stored in `password.len`.  The inputted value is checked if it is in the range [8, 128] and proceeds to prompt the user for the character criteria.  If the inputted value is not in the range [8, 128], then the user is alerted and `setConditions()` is called again to re-prompt the user for new criteria inputs. Next, the user is prompted for each character criteria and stores the user value in `opt`, which is then appened to `password.options`.  `ifOption()` is called update the number of options chosen (`pasword.numOptions`).  Finally, another check is done to verify that the user has chosen at least one option.  If `password.numOptions` is `0`, then `setConditions()` is called again to re-input the criteria. </br>
__Declared Variables:__ </br>
-`opt` </br>
> __Data Type:__ Boolean. </br>
> __Purpose:__ Marks which character criteria has been chosen by the user.

### reset()
__Parameters:__ None. </br>
__Return Type:__ Void. </br>
__Purpose:__ Resets`password` values. </br>
__Functionality:__ `password.pwd` is reset to an empty string, `password.len` and `password.numOptions` are reset to `0`, and `password.options` is reset to an empty array. </br>
__Declared Variables:__ None. </br>

### ifOption()
__Parameters:__ `opt` (Boolean). </br>
__Return Type:__ Void. </br>
__Purpose:__ Counts the number of character criteria chosen by the user. </br>
__Functionality:__ Checks if `opt` is `true`, then increments `password.numOptions`. </br>
__Declared Variables:__ None. </br>

## Global Variables
### Password
__Data Type:__ Object. </br>
__Purpose:__ Stores the generated randomized password and the user criteria. </br>
__Properties:__
- `pwd`
> __Data Type:__ String. </br>
> __Purpose:__ Generated randomized password. </br>
- `len`
> __Data Type:__ Integer. </br>
> __Purpose:__ Desired password length inputted by the user. </br>
- `options`
> __Data Type:__ Array of Boolean values. </br>
> __Purpose:__ Stores which character criteria are chosen by the user. </br>
- `numOptions`
> __Data Type:__ Integer. </br>
> __Purpose:__ Number of character criteria chosen by the user. </br>

## Website Preview
![](./assets/images/screenshot.png)

<br><br>
__*Live URL:*__ https://shhu21.github.io/pwd-generator/
