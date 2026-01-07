import {Asset} from "../../models/graphql.ts";
import {isVideo} from "../../lib/asset.ts";
import {HTMLAttributes, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import "./_Media.scss";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  asset?: Pick<Asset, 'url' | 'contentType' | 'title' | '__typename'> | null;
  play?: boolean;
}
export const Media = ({className, asset, play = false}: Props) => {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(ref.current){
      ref.current?.pause();
      ref.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if(play) {
      ref.current?.play();
    } else {
      if(ref.current){
        ref.current?.pause();
        ref.current.currentTime = 0;
      }
    }
  }, [play]);

  return <div className={classNames('Media', {'Media--loading': loading}, className)}>
    {loading && <span className="Media__loadingMessage">Loading media...</span>}
    {isVideo(asset) ?
      <video
        loop
        muted
        ref={ref}
        playsInline
        autoPlay
        onLoadedData={() => {
          setLoading(false)
        }}
        onError={() => setLoading(false)}
      >
        <source src={asset?.url ?? ''} type="video/mp4"/>
        {asset?.title && <p>{asset?.title}</p>}
      </video> :
      <img
        src={asset?.url ?? ''}
        alt={asset?.title ?? ''}
        onLoad={() => {
          setLoading(false)
        }}
        onError={() => setLoading(false)}
      />}
  </div>
}