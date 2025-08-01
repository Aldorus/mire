// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked entries e.g. videoEmbed)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. ima
import {BLOCKS} from '@contentful/rich-text-types';

import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {HTMLAttributes} from "react";
import classnames from "classnames";
import './_RichText.scss';
import {isVideo} from "../../lib/asset.ts";

function renderOptions(links: any) {
  // create an asset block map
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset);
  }

  // create an entry block map
  const entryBlockMap = new Map();
  // loop through the entries and add them to the map
  for (const entry of links.entries.block) {
    entryBlockMap.set(entry.sys.id, entry);
  }

  return {
    // other options...
    preserveWhitespace: true,
    renderNode: {
      // other options...

      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        // find the entry in the entryBlockMap by ID
        const entry = entryBlockMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query

        if (entry.__typename === 'VideoEmbed') {
          return (
            <iframe
              key={entry.sys.id}
              src={entry.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={entry.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id);
        const media = isVideo(asset) ? <video loop muted autoPlay playsInline>
          <source src={asset.url ?? ''} type="video/mp4"/>
          <p>{asset.title}</p>
        </video> : <img src={asset.url} alt={asset.title}/>;
        return <figure key={node.data.target.sys.id}>{media}<figcaption>{asset.description}</figcaption></figure>;
      },
    },
  };
}

type RichTextProps = {
  content?: any,
  className?: HTMLAttributes<HTMLElement>['className'];
};

export const RichText = ({content, className}: RichTextProps) => {
  return (
    <div
      className={classnames(['RichText', className])}>
      {content ? documentToReactComponents(
        content.json,
        content.links ? renderOptions(content.links) : {preserveWhitespace: true}
      ) : null}
    </div>
  );
}
