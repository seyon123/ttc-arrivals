import React from 'react'

function InfoBox({routes, handleRouteChange}) {
    return (
        <div className="infoBox">
			<div className="infoBoxHeader">
				<img className="logo" src="ttc.png"/>
				<div className="infoBoxTitle">Live Bus Map</div>
				<hr className="infoBoxDivider"/>
			</div>
			{routes?.length > 0 ?
				routes.map(({id, title}) => (
					<div tag={id} key={id} className="route" onClick={handleRouteChange}>
						<div tag={id} className="routeNum">{id}</div>
						<h1 tag={id} className="routeTitle">{title?.split("-", 2)[1].split("Night")[0].split("Express")[0]}</h1>
						<div tag={id} className="tags">
						{title.split("Express").length > 1 && 
							<div tag={id} className="tag">Express</div>
						}
						{title.split("Night").length > 1 && 
							<div tag={id} className="tag">Night</div>
						}
						</div>
					</div>
				))
			: null
			}
		</div>
    )
}

export default InfoBox
