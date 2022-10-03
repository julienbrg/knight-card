// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fBQJDH7PU5FGNVtvQedmDg
// Component: qCLGD-QBN4_dX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: nlfm8NUj2v054/component
import Button from "../../Button"; // plasmic-import: wQ8nuIXbn5TIi/component
import Footer from "../../Footer"; // plasmic-import: -Lfs3sivO2_2k/component
import { useScreenVariants as useScreenVariantsteWoHrXp1ORco } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: teWOHrXP1oRco/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_knight_card.module.css"; // plasmic-import: fBQJDH7PU5FGNVtvQedmDg/projectcss
import sty from "./PlasmicDashboard.module.css"; // plasmic-import: qCLGD-QBN4_dX/css

export const PlasmicDashboard__VariantProps = new Array();

export const PlasmicDashboard__ArgProps = new Array();

function PlasmicDashboard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsteWoHrXp1ORco()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__qo7Ov)}>
              <p.Stack
                as={"section"}
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                hasGap={true}
                className={classNames(projectcss.all, sty.section)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Knight Card helps you..."}
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__wjoHe)}>
                  <div
                    data-plasmic-name={"textBox"}
                    data-plasmic-override={overrides.textBox}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.textBox
                    )}
                  >
                    {"Create a Knight Card for your car."}
                  </div>
                </div>

                <Button
                  data-plasmic-name={"create"}
                  data-plasmic-override={overrides.create}
                  className={classNames("__wab_instance", sty.create)}
                >
                  {"Print"}
                </Button>
              </p.Stack>
            </div>
          ) : null}

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "text", "textBox", "create", "footer"],
  header: ["header"],
  section: ["section", "text", "textBox", "create"],
  text: ["text"],
  textBox: ["textBox"],
  create: ["create"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDashboard__ArgProps,
          internalVariantPropNames: PlasmicDashboard__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicDashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboard";
  } else {
    func.displayName = `PlasmicDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicDashboard = Object.assign(
  // Top-level PlasmicDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    text: makeNodeComponent("text"),
    textBox: makeNodeComponent("textBox"),
    create: makeNodeComponent("create"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicDashboard
    internalVariantProps: PlasmicDashboard__VariantProps,
    internalArgProps: PlasmicDashboard__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDashboard;
/* prettier-ignore-end */
