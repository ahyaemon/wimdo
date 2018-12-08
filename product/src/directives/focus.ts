import { DirectiveOptions } from 'Vue';

const directive: DirectiveOptions = {
    inserted(el): void {
        el.focus();
        (el as HTMLInputElement).select();
    },
};

export default directive;
