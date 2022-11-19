import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect } from 'react';
import { logInUser } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import BottomLink from '../validationForm/bottomLink/BottomLink';
import FormHeader from '../validationForm/formHeader/FormHeader';
import FormWrapper from '../validationForm/formWrapper/FormWrapper';
import { UserUpdateFormDataModel } from '../validationForm/interfaces';
import ValidationForm from '../validationForm/ValidationForm';

const SignIn: FC = (): ReactElement => {
	const formActionText = useAppSelector((state) => state.lang.text.singIn);
	const bottomLinkTxt = useAppSelector((state) => state.lang.text.noAccount);
	const linkTo = useAppSelector((state) => state.lang.text.singUp).split(' ').join('');
	const headerText = useAppSelector((state) => state.lang.text.singInGreet);
	const headerMessage = useAppSelector((state) => state.lang.text.singInMessage);
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector((state) => state.user.isAuth);
	const router = useRouter();

	const onSubmit = (data: UserUpdateFormDataModel) => {
		dispatch(logInUser(data));
	};

	useEffect(() => {
		if (isAuth) {
			router.push('/boards', undefined, { shallow: true });
		}
	}, [isAuth, router]);


	return (
		<FormWrapper>
			<FormHeader header={headerText} text={headerMessage} />
			<ValidationForm
				header={formActionText}
				resetForm
				submitBtnTxt={formActionText}
				onSubmit={onSubmit}
				isSigningIn
			/>
			<BottomLink text={bottomLinkTxt} linkTo={linkTo}/>
		</FormWrapper>
	);
};

export default SignIn;