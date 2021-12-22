import styles from "@components/App.module.scss";

import * as React from "react";

import App from "@components/App";
import Logo from "@components/Logo";
import VisualLogo from "@components/VisualLogo";
import CondensedSection from "@components/CondensedSection";
import Checkmark from "@components/Checkmark";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import TopicPickerGrid from "@components/TopicPickerGrid";
import Tag from "@components/Tag";

import Art1 from "@components/artwork/1";
import Art2 from "@components/artwork/2";
import Art3 from "@components/artwork/3";

const TOPICS = [
  {
    topic: "Staking Protocols",
    artwork: (
      <img src="/use-cases/use-case-5.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        Staking Protocols can substantially improve the capital efficiency in
        the Filecoin economy - matching yield-seeking token holders and
        liquidity-seeking storage providers. With staking protocols, token
        holders can trustlessly pool their assets and set rules and terms by
        which storage providers (of any size) can permissionlessly access that
        liquidity.
        <br />
        <br />
        Staking protocols can use on-chain metrics (e.g. longevity of an
        address, history of slashing) to better assess risk while also allowing
        storage providers of all sizes to access capital. This can help storage
        providers fund up-front capital costs like Filecoin+ deal collateral, while
        giving staking pools access to significant yield potential.
      </React.Fragment>
    ),
  },
  {
    topic: "Decentralized Compute",
    artwork: (
      <img src="/use-cases/use-case-1.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        Filecoin and IPFS enable distributing content-addressed datasets across many 
        storage providers around the world to increase data redundancy and resiliency. 
        Globally distributed data brings significant cost and reliability advantages, 
        but can also mean parts of a given dataset may be stored far away from one another.
        <br />
        <br />
        Frequently, storage clients don't just want to store data long-term, but
        want to execute data pipelines over these globally distributed datasets to 
        validate, transform, aggregate, normalize, and generally process datasets to extract
        insights, construct models, and derive new value. Regrouping highly
        distributed data into a central location to compute over it is
        expensive, underperformant, and undesirable. Therefore, pushing compute
        to the edges and creating systems to coordinate decentralized
        computation pipelines is a must. 
        To enable efficient computation over these globally distributed datasets, it
        makes sense to bring the program to the data, instead of vice versa.
        <br />
        <br />
        FVM actors can help to broker computational resources, incentivize compute
        execution, distribute workloads across available storage providers, and prove 
        the validity of the computation's result in order to claim rewards.
      </React.Fragment>
    ),
  },
  {
    topic: "Perpetual Storage",
    artwork: (
      <img src="/use-cases/use-case-2.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        Many common-good datasets rely on stewarding organizations to ensure
        their preservation and continued resilience (e.g. a government,
        corporation, or non-profit). When this responsibility lies on a
        single organization, it can create a central point of failure. 
        If that organization goes away or changes motivation, the common-good 
        data could be lost forever, resulting in a loss for society.
        <br />
        <br />
        With smart contracts, the responsibility of ensuring valuable data is
        kept alive can be shared collectively, and its continuation and renewal
        can be guaranteed by permissionless code running autonomously on-chain -
        with no risk of modification or alteration of the underlying datasets.
        Funding mechanisms can be coupled with [DataDAOs](/datadaos) and
        [Staking Protocols](/staking-protocols) to enable pay-once-store-forever
        mechanics.
        <br />
        <br />
        Example use cases: Crime statistics, inflation metrics, election
        results, envrionmental data records, etc.
      </React.Fragment>
    ),
  },
  {
    topic: "Repair workers",
    artwork: (
      <img src="/use-cases/use-case-10.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        Many clients who store data on Filecoin want both the verifiability of a storage 
        network that provably stores their data over time, and the ease of use of a fire-and-forget
        storage system they can trust to automatically repair itself over time.
        <br />
        <br />
        Repair workers solve this problem by automating the process of renewing expired or terminated deals
        - saving the client the time and overhead of manually refreshing deals 2, 5, or 10+ years in the future. 
        Instead, the repair worker can monitor the chain on the clients behalf for any faults or expirations, 
        and proactively replicate deal data to more storage providers in accordance with a user-defined policy.
      </React.Fragment>
    ),
  },
  {
    topic: "Insurance Protocols",
    artwork: (
      <img src="/use-cases/use-case-3.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        When offering storage services to the network, storage providers are
        required to put up a large amount of collateral to secure their services 
        in case of faults. Insurance protocols could help storage providers 
        raise funds for these up-front costs from investors, or distribute risk 
        of a fault across a wider community. Investors (or DAOs) can receive a
        revenue stream by purchasing said risk in exchange for recurring fees.
      </React.Fragment>
    ),
  },
  {
    topic: "Storage Derivatives",
    artwork: (
      <img src="/use-cases/use-case-4.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        The dynamic nature of decentralized storage costs cause planning
        challenges for both storage clients and providers. Data producers (clients) will need to
        store data in the future for a predefined period of time and will want
        to budget in costs now (e.g. a bank who knows they will need to store 1
        TB of 2021 transaction data from January 1, 2022 to December 31, 2022).
        Storage providers will want to know how much to spend on hardware based
        on their predicted earnings. Providing a way to smooth predictability
        about future costs and returns will bring stability to this market and
        reduce risk.
        <br />
        <br />
        By enabling users to “pre-buy” a chunk of storage space at a specific
        price today, a data producer will be able to predict their costs over a
        given period of time. By enabling a storage provider to bid on
        delivering a block of storage in the future, they will be able to
        purchase hardware and be more secure that they are margin positive.
      </React.Fragment>
    ),
  },
  {
    topic: "Data DAOs",
    artwork: (
      <img src="/use-cases/use-case-6.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        DAOs (Decentralized Autonomous Organizations) are member-owned
        communities with no centralized leadership. With the FVM, communities
        can collectively fund and govern the storage of public-good datasets to
        ensure their long term preservation and availability. DAO members can 
        collectively make decisions on what data to add to their collection,
        pool resources for its long-term preservation, and/or benefit from 
        potential dataset earnings via accessibility to compute protocols.
      </React.Fragment>
    ),
  },
  {
    topic: "Enabling L2 networks",
    artwork: (
      <img src="/use-cases/use-case-7.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        L2s are dedicated networks –with independent incentive systems– that conduct
        specialized tasks on top of the Filecoin network. Layer 2 solutions
        commit their state onto the Filecoin network (Layer 1), thus inheriting
        its security properties.
        <br />
        <br />
        Examples include: * Trustless reputation systems that measure and report
        the Quality of Service of storage providers, as perceived from different
        geographical locations around the globe. * Data availability sampling
        networks that challenge storage providers by retrieving random data, and
        verifying correct delivery within a specific time window. * Content
        Delivery Networks that cache data stored in Filecoin deals by
        replicating it across a number of geographies, and making it accessible
        through a number of transports, to ensure quick and seamless retrieval
        around the globe.
      </React.Fragment>
    ),
  },
  {
    topic: "Cross-chain interoperability bridges",
    artwork: (
      <img src="/use-cases/use-case-8.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        Filecoin actors can serve as bridges by understanding the cryptographic
        primitives and data structures of other chains, so as to demonstrate to
        other Filecoin actors that certain events or state transitions happened 
        on another chain. Native bridge actors can also be used to move value atomically across chains.
        <br />
        <br />
        This also works in the opposite direction. For example, Filecoin actors
        would be able to generate proofs about Filecoin state (e.g. deals,
        sectors, storage providers, balances) or transactions in a way that is
        comprehensible by Ethereum, NEAR, Solana, etc. counterparts bridge
        contracts.
        <br />
        <br />
        The FVM helps Filecoin interoperate more trustlessly and smoothly with 
        other blockchains by offering a pluggable smart contract layer on both sides.
      </React.Fragment>
    ),
  },
  {
    topic: "New storage market primitives",
    artwork: (
      <img src="/use-cases/use-case-9.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        To store data in the Filecoin network, clients must find a suitable
        storage provider and perform a deal with them. This model is simple but
        rather inflexible. The FVM unlocks creating many new storage market protocols!
        <br />
        <br />
        Imagine creating composable market primitives such as: * storage
        bounties, where storage providers compete to win deals, bringing the
        price down for clients. * full-sector auctions, where clients get a discount for
        purchasing and occupying entire sectors. * volume discounts, where the
        price is further reduced for purchasing multiple sectors at once. *
        sector rebates, where the provider refunds the client (who could be a
        DataDAO!) once they purchase N sectors over a specific period of time.
      </React.Fragment>
    ),
  },
  {
    topic: "Replication workers",
    artwork: (
      <img src="/use-cases/use-case-10.png" className={styles.artworkTopic} />
    ),
    description: (
      <React.Fragment>
        Clients want their data to be replicated across the network to maximize
        the chances it will survive in the event of storage provider failures.
        To achieve that today, clients have to execute N deals with storage providers,
        transferring the data N times.
        <br />
        <br />
        Replication workers solve this problem by charging a small fee to act as a
        mediator - saving the client the time and overhead of negotiating multiple deals. 
        Instead, the replication worker can automaticaly replicate the Filecoin deal N
        times across the network in accordance with the user-defined
        policy based on number of replicas, region selection, latency, price,
        etc. (potentially using L2 reputation systems to decide where to place
        the data!)
      </React.Fragment>
    ),
  },
];

function ListComponent(props) {
  return (
    <a className={styles.listItem} href={props.href} target="_blank">
      <span className={styles.listItemLeft}>{props.image}</span>
      <span className={styles.listItemRight}>
        <span className={styles.listItemTitle} style={{ marginTop: 0 }}>
          {props.title}&nbsp;{props.tag}
        </span>
        <span className={styles.listItemParagraph}>{props.children}</span>
      </span>
    </a>
  );
}

function TopicComponent(props) {
  return (
    <a className={styles.topic} href={props.href} target="_blank">
      <span className={styles.topicImage}>{props.image}</span>
      <span className={styles.topicTitle}>
        {props.title}&nbsp;{props.tag}
      </span>
      <span className={styles.topicText}>{props.children}</span>
    </a>
  );
}

function ActionButton(props) {
  return (
    <a className={styles.actionButton} target="_blank" href={props.href}>
      <span className={styles.actionButtonTitle}>{props.title}</span>
      <span className={styles.actionButtonText}>{props.children}</span>
    </a>
  );
}

function TimelineItem(props) {
  return (
    <span className={styles.timelineItem}>
      <span className={styles.timelineItemDate}>{props.date}</span>
      {props.isChecked ? (
        <span
          className={styles.timelineItemDot}
          style={{ background: "var(--theme-success)", color: "#fff" }}
        >
          <Checkmark height="16px" />
        </span>
      ) : (
        <span className={styles.timelineItemDot}></span>
      )}
      <span className={styles.timelineItemText}>
        <div className={styles.h3}>{props.title}</div>
        <div className={styles.desc} style={{ marginTop: 12 }}>
          {props.children}
        </div>
      </span>
    </span>
  );
}

function Home(props) {
  React.useEffect(() => {
    console.log("test");
  }, []);

  return (
    <App
      title="Filecoin Virtual Machine"
      description="Programmable storage is coming to the Filecoin Network."
      url="https://fvm.filecoin.io"
    >
      <Navigation />

      <div
        className={styles.center}
        style={{ marginTop: 48, marginBottom: 48 }}
      >
        <div className={styles.centerText}>Programmable storage is coming</div>
        <VisualLogo height="428px" style={{ opacity: 0.4 }} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2}>Possibilities</h2>
        <p className={styles.p} style={{ maxWidth: 488, paddingTop: 24 }}>
          <b>User-defined smart contracts + provable storage = FVM</b>
          <br />
          <br />
          The FVM unlocks boundless possibilities, ranging from programmable
          storage primitives (such as storage bounties, auctions, and more),
          to cross-chain interoperability bridges (e.g. trustlessly connecting
          Filecoin with Ethereum, Solana, NEAR, and more), to data-oriented 
          Decentralized Autonomous Organizations (DAOs), to Layer 2 solutions 
          (such as reputation systems, data availability sampling, computation 
          fabrics, and incentive-aligned Content Delivery Networks).
          <br />
          <br />
          Here are some of the things we're excited to see deployed on the
          Filecoin network. It's up to you to make them happen!
        </p>

        <div className={styles.actions}>
          <ActionButton
            title="Apply for a grant"
            href="https://grants.filecoin.io/"
          >
            Contribute to the FVM
          </ActionButton>

          <ActionButton title="Talk to us" href="https://filecoin.io/slack">
            Join discussion
          </ActionButton>
        </div>
      </div>

      <div className={styles.row}>
        <TopicPickerGrid topics={TOPICS} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 88, marginBottom: 24 }}>
          Roadmap
        </h2>
        <p
          className={styles.p}
          style={{ maxWidth: 488, paddingTop: 24, paddingBottom: 64 }}
        >
          <b>
            The Filecoin Virtual Machine will be introduced incrementally.&nbsp;
          </b>
          This minimizes the risk of disruption to the network.
          <br />
          <br />
          Follow the progress and participate in the different phases! If you're
          a web3 developer, start ideating the next generation of Filecoin-based
          trustless applications now.
          <br />
          <br />
          As the roadmap progresses, more and more resources will become
          available to onboard, so stay tuned.
        </p>
        <TimelineItem
          date="Q4 2021"
          isChecked
          title="Milestone 0: Preview of built-in actors on FVM"
        >
          Canary nodes running Built-in actors will be compiled to WASM. The FVM
          prototype will be integrated into Lotus behindn a feature flag. This
          with the existing chain and requiring no protocol upgrade.
          <b>Filecoin Virtual Machine</b> launches and developers begin working
          on tutorials, examples, and exploring new applications with data.
        </TimelineItem>
        <TimelineItem
          date="Q1 2022"
          title="Milestone 1: Mainnet deployment of built-in actors on FVM"
          last
        >
          New clear and informative documentation is released to the world. More
          tools for developers to write smart contracts and take full advantage
          of the immense capabilities of the Filecoin Network.
        </TimelineItem>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 112 }}>
          Get ready to build
        </h2>
        <p className={styles.p} style={{ maxWidth: 488, paddingTop: 24 }}>
          Actors are the equivalent of smart contracts in Filecoin. Deploy
          existing EVM smart contracts as Filecoin actors, or write native
          actors from scratch using the reference Rust SDK (or create your own
          SDK!).
        </p>
      </div>

      <div className={styles.row} style={{ paddingBottom: 128 }}>
        <div className={styles.rowCol}>
          <h3 className={styles.h3custom} style={{ marginTop: 48 }}>
            Developer resources
          </h3>
          <ListComponent
            title="Tutorials"
            tag={<Tag>Coming Soon</Tag>}
            image={<img src="/spots/spot-1.png" className={styles.spot} />}
          >
            Learn how to deploy to the FVM with some simple tutorials.
          </ListComponent>
          <ListComponent
            title="Open issues"
            href="https://github.com/filecoin-project/fvm"
            image={<img src="/spots/spot-2.png" className={styles.spot} />}
          >
            Follow the issues on GitHub and stay up to date.
          </ListComponent>
          <h3 className={styles.h3custom} style={{ marginTop: 48 }}>
            Specifications
          </h3>
          <ListComponent
            title="FVM Architecture"
            tag={<Tag>Coming Soon</Tag>}
            image={<img src="/spots/spot-3.png" className={styles.spot} />}
          >
            Learn how the FVM works and the technologies involved.
          </ListComponent>
          <ListComponent
            title="EVM Compatibility"
            tag={<Tag>Coming Soon</Tag>}
            image={<img src="/spots/spot-4.png" className={styles.spot} />}
          >
            Learn how the EVM emulation works, and how you can use the EVM with
            the FVM.
          </ListComponent>
        </div>

        <div className={styles.rowCol}>
          <h3 className={styles.h3custom} style={{ marginTop: 48 }}>
            SDKs
          </h3>
          <ListComponent
            title="Rust SDK"
            image={<img src="/spots/spot-5.png" className={styles.spot} />}
            tag={
              <Tag style={{ background: `#ff0000`, color: "#fff" }}>WIP</Tag>
            }
          >
            {/* @cake 'coming soon' badge? */}
            Write Filecoin actors in Rust
          </ListComponent>
          <ListComponent
            title="Swift SDK"
            image={<img src="/spots/spot-6.png" className={styles.spot} />}
            tag={
              <Tag style={{ background: `#ff0000`, color: "#fff" }}>WIP</Tag>
            }
          >
            {/* @cake 'build it' badge? */}
            Write Filecoin actors in Swift
          </ListComponent>
          <ListComponent
            title="Kotlin SDK"
            image={<img src="/spots/spot-7.png" className={styles.spot} />}
            tag={
              <Tag style={{ background: `#ff0000`, color: "#fff" }}>WIP</Tag>
            }
          >
            {/* @cake 'build it' badge? */}
            Write Filecoin actors in Kotlin
          </ListComponent>
          <ListComponent
            title="Go SDK"
            image={<img src="/spots/spot-8.png" className={styles.spot} />}
            tag={
              <Tag style={{ background: `#ff0000`, color: "#fff" }}>WIP</Tag>
            }
          >
            {/* @cake 'build it' badge? */}
            Write Filecoin actors in Go (using the TinyGo compiler)
          </ListComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.h2} style={{ marginTop: 96 }}>
          Want to hack on the FVM?
        </h2>
      </div>

      <div className={styles.row} style={{ paddingBottom: 128 }}>
        <TopicComponent
          image={
            <img src="/heroes/hero-1.png" className={styles.artworkChoice} />
          }
          title="Build"
          tag={<Tag>Coming Soon</Tag>}
        >
          Build a use case for the FVM. Get rewarded for building an example
          smart contract for the community.
        </TopicComponent>
        <TopicComponent
          title="Battletesting"
          tag={<Tag>Coming Soon</Tag>}
          image={
            <img src="/heroes/hero-2.png" className={styles.artworkChoice} />
          }
        >
          Try to break out implementation. There are rewards for helping us find
          bugs and fix issues.
        </TopicComponent>
        <TopicComponent
          title="Bridges"
          tag={<Tag>Coming Soon</Tag>}
          image={
            <img src="/heroes/hero-3.png" className={styles.artworkChoice} />
          }
        >
          Write a bridge to another language. Help bring more programs to our
          network.
        </TopicComponent>
        <TopicComponent
          title="Community"
          tag={<Tag>Coming Soon</Tag>}
          image={
            <img src="/heroes/hero-4.png" className={styles.artworkChoice} />
          }
        >
          Engage with our ecosystem and community. Come join the Filecoin
          community and work with us to build Web3.
        </TopicComponent>
      </div>

      <Footer />
    </App>
  );
}

export async function getServerSideProps(context) {
  if (
    !context ||
    !context.query ||
    !context.query.access ||
    context.query.access !== "fvm4life"
  ) {
    return {
      redirect: {
        permanent: false,
        destination: "https://filecoin.io",
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;
