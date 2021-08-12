import React from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const Body = () => (
	<Form>
		<Form.Group widths="equal">
			<Form.Field
				id="form-input-control-first-name"
				control={Input}
				label="Adınız"
				placeholder="First name"
			/>
		</Form.Group>
		<Form.Field
			id="form-input-control-error-email"
			control={Input}
			label="Email"
			placeholder="utku@gmail.com"
		/>
		<Form.Field
			id="form-textarea-control-opinion"
			control={TextArea}
			label="Açıklama"
			placeholder="Opsiyonel"
		/>
		<Form.Field
			id="form-button-control-public"
			control={Button}
			content="Gönder"
			label=""
		/>
	</Form>
);

export default Body;
