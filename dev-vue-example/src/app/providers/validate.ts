import { defineRule, configure } from 'vee-validate';
import rules from '@vee-validate/rules';
 configure({
    validateOnInput: true,
  });
  
  Object.keys(rules).forEach((rule) => {
    defineRule(rule, rules[rule]);
  });
  
  defineRule('required', (value: string | string[]) => {
      if (!value || !value.length) {
        return 'Поле не заполнено';
      }
      return true;
    });
    

    
    export {rules,defineRule,configure}