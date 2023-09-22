import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import './usefulLinkCard.scss'

interface InputProps {
	imageUrl: string
	title: string
	subTitle: string
	linkUrl: string
}

const UsefulLinkCard = (props: InputProps) => {
	return (
		<Card sx={{ maxWidth: 350 }} className="useful-link-card">
			<CardActionArea component="a" href={props.linkUrl} target="_blank" >
				<CardMedia component="img" alt={props.title} height="180" image={props.imageUrl} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.subTitle}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default UsefulLinkCard
