import React from 'react';
import { Link } from 'react-router-dom';

export default function Image({image}) {
	return(
		<tr>
			<td>{image.imgName}</td>
			<td>{image.imgPath}</td>
			<td>{image.errTitle}</td>
			<td>{image.errText}</td>
			<td >
				<Link to={"/images/edit/" + image._id}>Edit</Link>
			</td>		
		</tr>
	);
}