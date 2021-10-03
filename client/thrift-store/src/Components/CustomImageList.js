import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart, DoubleArrow } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PropTypes from "prop-types";

CustomImageList.propTypes = {
    titlePage: PropTypes.string.isRequired,
    itemData: PropTypes.array.isRequired

}

const useStyles = makeStyles({
    root: {
        padding: 50,
    }
})

export default function CustomImageList(props) {
    const classes = useStyles();
    return (
        <>
            <IconButton
                color="secondary"
            >
                <DoubleArrow fontSize="large" />
                <Typography variant="h3">
                    {props.titlePage}
                </Typography>
            </IconButton>
            <ImageList className={classes.root} rowHeight={500} gap={20} cols={4}>
                {props.itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>Price: {item.price}</span>}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`Add to cart ${item.title}`}
                                >
                                    <AddShoppingCart fontSize="large" />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}