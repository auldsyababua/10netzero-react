'use client'

import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, User, ArrowRight, Zap } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/seo/SEOHead'
import { BreadcrumbSchema, ArticleSchema } from '@/components/seo/JsonLd'
import { buildUrl } from '@/config/seo'
import { blogPosts } from './Blog'

// Blog post content by slug
const blogContent: Record<string, { content: React.ReactNode }> = {
  'what-is-digital-midstream': {
    content: (
      <>
        <p className="lead">
          Digital Midstream™ is a new category of energy infrastructure that transforms stranded natural gas into revenue by bringing compute power directly to the wellhead. Instead of building pipelines to move gas to market, we bring the market to the gas.
        </p>

        {/* IMAGE PROMPT 1: Hero Diagram - The Problem & Solution Overview */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Hero Diagram - Digital Midstream™ Overview</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a clean, professional infographic showing the Digital Midstream™ concept. Left side shows "The Problem" - an oil well with a gas flare, labeled "Stranded Gas" with an arrow pointing to flames and a red "$0 revenue" label. Right side shows "The Solution" - the same well connected to a modular generator which powers a containerized data center, with a green arrow pointing to "$$$" revenue. Use an industrial color palette: dark grays, orange accents (hex #E36414), and clean white text. Style: technical but accessible, suitable for oil & gas executives. 16:9 aspect ratio.
          </p>
        </div>

        <h2>The Stranded Gas Problem</h2>
        <p>
          Oil wells frequently produce natural gas as a byproduct—called "associated gas." When these wells are located far from pipeline infrastructure, operators face a difficult choice: flare the gas (burn it) or vent it (release it directly). Both options waste a valuable resource and increasingly trigger regulatory penalties.
        </p>

        <p>The economics are stark:</p>
        <ul>
          <li><strong>Pipeline construction:</strong> $10.7 million per mile average</li>
          <li><strong>EPA methane fees:</strong> Escalating to $1,500/ton by 2026</li>
          <li><strong>Waha Hub pricing:</strong> Negative 47% of trading days in 2024</li>
          <li><strong>Flared gas in Texas (2023):</strong> Over 300 billion cubic feet</li>
        </ul>

        <p>
          For wells producing 500 Mcf/day located even 5 miles from the nearest pipeline tie-in, traditional midstream solutions simply don't pencil. The capital costs are too high, the timeline too long, and the commodity prices too volatile.
        </p>

        {/* IMAGE PROMPT 2: Economic Comparison Chart */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Economic Comparison - Traditional vs Digital Midstream™</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a side-by-side comparison infographic with two columns. LEFT COLUMN "Traditional Midstream": Show icons for Pipeline ($10.7M/mile), Clock (2-5 year timeline), Building permits (complex regulatory), Down arrow (exposed to negative gas prices). RIGHT COLUMN "Digital Midstream™": Show icons for Truck/container (modular equipment), Fast clock (weeks to deploy), Checkmark (simplified permitting), Up arrow (compute revenue regardless of gas prices). Use industrial color palette with orange (#E36414) for Digital Midstream™ column highlights. Add cost/benefit callouts with specific numbers. Professional, clean style suitable for investor presentations. 16:9 aspect ratio.
          </p>
        </div>

        <h2>How Digital Midstream™ Works</h2>
        <p>
          Digital Midstream™ solves this problem by converting stranded gas to electricity on-site, then using that electricity to power high-value compute workloads. The infrastructure is modular, deployable in weeks, and requires zero capital from the operator.
        </p>

        <h3>Step 1: Site Assessment</h3>
        <p>
          We analyze your gas production data to determine volume, composition, and projected decline curves. This informs equipment sizing and revenue projections.
        </p>

        {/* IMAGE PROMPT 3: Site Assessment Process */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Site Assessment Process Flow</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a horizontal process flow diagram showing 4 steps of site assessment. Step 1: "Gas Analysis" - icon of gas molecule/meter, subtitle "Volume, BTU content, H2S levels". Step 2: "Production Curve" - icon of declining graph, subtitle "Projected output over time". Step 3: "Equipment Sizing" - icon of generator, subtitle "Match capacity to gas volume". Step 4: "Revenue Modeling" - icon of dollar chart trending up, subtitle "Project monthly operator share". Connect with arrows, use numbered circles. Industrial color palette with orange (#E36414) accent highlights. Clean, professional style. 16:9 aspect ratio.
          </p>
        </div>

        <h3>Step 2: Generator Deployment</h3>
        <p>
          We deploy modular natural gas generators sized to match your available gas volume. These industrial-grade units from manufacturers like Caterpillar and Cummins are designed for continuous operation on wellhead gas.
        </p>

        <p>Key specifications include:</p>
        <ul>
          <li><strong>Power range:</strong> 0.5 MW to 500 MW total site capacity</li>
          <li><strong>Fuel flexibility:</strong> Handles varying BTU content and composition</li>
          <li><strong>Emissions:</strong> 98% methane reduction vs. flaring</li>
          <li><strong>Mobility:</strong> Equipment can be relocated as production declines</li>
        </ul>

        {/* IMAGE PROMPT 4: Generator Equipment Detail */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Generator Infrastructure Detail</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a technical cutaway/diagram illustration of a modular natural gas generator setup at a wellhead. Show: (1) Gas inlet from well with meter and conditioning equipment, (2) Caterpillar-style industrial generator with labeled components (engine, alternator, control panel), (3) Power output cables running to adjacent compute container, (4) Exhaust stack with emissions monitoring. Include callout boxes with specs: "500kW-2MW per unit", "98% methane reduction", "Remote monitoring". Style: technical illustration, industrial color palette (dark gray, orange #E36414 accents), suitable for engineering review but accessible to executives. 16:9 aspect ratio.
          </p>
        </div>

        <h3>Step 3: Compute Infrastructure</h3>
        <p>
          The electricity generated on-site powers containerized data centers housing either Bitcoin mining ASICs or AI inference GPUs. Both workloads share a critical characteristic: they're location-flexible and can operate profitably at remote sites.
        </p>

        <h4>Bitcoin Mining</h4>
        <p>
          Bitcoin mining converts electricity directly to revenue through the proof-of-work consensus mechanism. Modern ASIC miners (Application-Specific Integrated Circuits) offer excellent power-to-revenue ratios when powered by low-cost stranded gas.
        </p>

        <h4>AI Inference</h4>
        <p>
          For sites with adequate connectivity, AI inference workloads—processing requests for large language models and other AI applications—can provide higher revenue per kilowatt. We deploy NVIDIA GPUs optimized for off-grid operation:
        </p>
        <ul>
          <li><strong>NVIDIA L4:</strong> 72W per GPU, optimal for most inference workloads</li>
          <li><strong>NVIDIA H100 PCIe:</strong> 350W per GPU, for larger models requiring more memory</li>
          <li><strong>Containerized deployment:</strong> Standard air cooling, no liquid cooling required</li>
        </ul>

        {/* IMAGE PROMPT 5: Compute Infrastructure Comparison */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Compute Options - Bitcoin Mining vs AI Inference</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a split comparison diagram showing two compute options side by side. LEFT: "Bitcoin Mining" - Show ASIC mining hardware rack, labeled "Bitmain S21 Pro ASICs", with callouts: "High energy efficiency", "Minimal connectivity needs", "Direct BTC revenue", "Proven technology". RIGHT: "AI Inference" - Show NVIDIA GPU rack (L4/H100), labeled "NVIDIA L4/H100 GPUs", with callouts: "Higher $/kWh potential", "Requires Starlink/fiber", "AI workload flexibility", "Emerging opportunity". Center bottom: decision tree showing "Connectivity Available?" leading to "Yes → Consider AI" or "No → Bitcoin Mining". Industrial color palette, orange (#E36414) accents. Professional, clean. 16:9 aspect ratio.
          </p>
        </div>

        <h3>Step 4: Revenue Sharing</h3>
        <p>
          The operator contributes only one thing: access to gas that would otherwise be flared. 10NetZero handles all capital investment, deployment, operations, and maintenance. Revenue is shared monthly based on compute output.
        </p>

        {/* IMAGE PROMPT 6: Revenue Flow Diagram */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Revenue Flow Diagram</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a Sankey-style flow diagram showing how value flows in Digital Midstream™. START: "Stranded Gas (Cost Center)" in red/gray. MIDDLE: Gas flows through "On-Site Generator" → "Electricity" → "Compute Infrastructure". END: Revenue splits into two streams: "Operator Share" (shown in green with dollar signs) and "10NetZero Operations" (shown in orange #E36414). Add callout: "Zero Capital from Operator". Show this transformation visually as gas icon converting to electricity icon converting to Bitcoin/compute icon converting to cash. Clean, professional style with industrial colors. 16:9 aspect ratio.
          </p>
        </div>

        <h2>The Complete Site Layout</h2>
        <p>
          A typical Digital Midstream™ deployment occupies a modest footprint adjacent to the wellhead. The modular nature allows scaling up or down based on gas availability.
        </p>

        {/* IMAGE PROMPT 7: Complete Site Layout Aerial View */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Complete Site Layout - Aerial/Plan View</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create an aerial/isometric view illustration of a complete Digital Midstream™ site. Show: (1) Oil wellhead with separator (labeled), (2) Gas conditioning unit with meter, (3) Two modular generators in parallel configuration, (4) Two 40-foot shipping containers housing compute equipment with visible cooling fans, (5) Small control building/monitoring station, (6) Starlink antenna on pole, (7) Perimeter fencing. Include measurements/scale (approximately 100x150 ft footprint). Label all components clearly. Add compass rose. Style: technical site plan but with 3D isometric perspective for visual interest. Industrial color palette with orange (#E36414) highlighting the compute containers. 16:9 aspect ratio.
          </p>
        </div>

        <h2>Addressing Common Questions</h2>

        <h3>What about gas composition and H2S?</h3>
        <p>
          Our gas conditioning equipment handles typical wellhead gas compositions, including sour gas with elevated H2S content. We perform detailed gas analysis during site assessment to ensure equipment compatibility.
        </p>

        <h3>How quickly can you deploy?</h3>
        <p>
          Typical deployment timeline is 4-8 weeks from contract signing to first power generation. Compare this to 2-5 years for pipeline construction.
        </p>

        <h3>What happens when the well declines?</h3>
        <p>
          Equipment is modular and mobile. As production declines, we can right-size the deployment or relocate equipment to other sites. This flexibility is a key advantage over fixed pipeline infrastructure.
        </p>

        <h3>Do I need to provide internet connectivity?</h3>
        <p>
          No. For Bitcoin mining operations, we deploy Starlink terminals for basic monitoring and control. For AI inference workloads requiring higher bandwidth, we evaluate fiber builds or multi-terminal Starlink configurations as part of the site assessment.
        </p>

        {/* IMAGE PROMPT 8: Connectivity Options */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Data Connectivity Options</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a comparison chart of data connectivity options for remote compute sites. Show three tiers vertically: TIER 1 "Starlink Basic" - satellite dish icon, "50-200 Mbps", "Sufficient for Bitcoin mining monitoring", cost indicator $. TIER 2 "Starlink Business/Multi-terminal" - multiple satellite dishes, "200-500 Mbps", "Light AI inference workloads", cost indicator $$. TIER 3 "Fiber Build" - fiber optic cable icon, "1-10 Gbps", "Full AI inference capability", cost indicator $$$, note "Break-even at 10-20 miles". Include decision guidance at bottom. Clean, professional infographic style with industrial colors and orange (#E36414) accents. 16:9 aspect ratio.
          </p>
        </div>

        <h2>Regulatory Compliance Benefits</h2>
        <p>
          Beyond the revenue opportunity, Digital Midstream™ provides significant regulatory advantages:
        </p>

        <ul>
          <li><strong>98% methane reduction:</strong> Generators combust methane far more completely than open flares</li>
          <li><strong>63% CO2e reduction:</strong> Total greenhouse gas impact drops significantly</li>
          <li><strong>EPA fee avoidance:</strong> Eliminates methane fee exposure (up to $1,500/ton by 2026)</li>
          <li><strong>Proactive compliance:</strong> Position ahead of tightening state regulations</li>
          <li><strong>Documented emissions:</strong> Real-time monitoring for regulatory reporting</li>
        </ul>

        {/* IMAGE PROMPT 9: Emissions Comparison */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Emissions Reduction Comparison</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a bar chart/comparison showing emissions outcomes for three scenarios. BAR 1 "Venting" - tallest bar in red, labeled "100% methane released", "84x CO2 potency (20-year)". BAR 2 "Flaring" - medium bar in orange, labeled "~90% combustion efficiency", "Residual methane + CO2". BAR 3 "Digital Midstream™" - shortest bar in green, labeled "98% methane reduction", "63% total CO2e reduction". Add EPA fee callout showing avoided costs. Clean data visualization style with industrial colors. Include source attribution to EPA data. 16:9 aspect ratio.
          </p>
        </div>

        <h2>The Technology Stack</h2>
        <p>
          A complete Digital Midstream™ deployment integrates several technology layers:
        </p>

        {/* IMAGE PROMPT 10: Technology Stack Diagram */}
        <div className="my-8 p-6 bg-muted/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground italic mb-2">📷 Image: Digital Midstream™ Technology Stack</p>
          <p className="text-xs text-muted-foreground">
            <strong>Claude Desktop Prompt:</strong> Create a layered technology stack diagram with 5 horizontal layers, bottom to top: LAYER 1 "Energy Layer" - Gas conditioning, Natural gas generators, Power distribution. LAYER 2 "Compute Layer" - ASIC miners or NVIDIA GPUs, Containerized deployment, Cooling systems. LAYER 3 "Network Layer" - Starlink connectivity, Fiber (optional), Local networking. LAYER 4 "Operations Layer" - Remote monitoring, Predictive maintenance, Performance optimization. LAYER 5 "Revenue Layer" - Bitcoin/AI workload execution, Settlement, Operator payments. Use stacked blocks visual style with icons for each component. Industrial color palette with gradient from gray (bottom) to orange (#E36414) at top. Show data/power flow arrows between layers. 16:9 aspect ratio.
          </p>
        </div>

        <h2>Getting Started</h2>
        <p>
          The first step is a no-obligation site assessment. We analyze your gas production data, evaluate site logistics, and provide a detailed revenue projection.
        </p>

        <ol>
          <li><strong>Contact us</strong> with basic well information and location</li>
          <li><strong>Site assessment</strong> analyzes gas volume, composition, and site logistics</li>
          <li><strong>Revenue projection</strong> details expected monthly operator share</li>
          <li><strong>Contracting</strong> establishes revenue share terms</li>
          <li><strong>Deployment</strong> delivers operating infrastructure in 4-8 weeks</li>
          <li><strong>Revenue</strong> begins flowing from day one of operation</li>
        </ol>

        <p>
          Operators with stranded gas assets—whether currently flaring, venting, or simply shut-in—have a new option. Digital Midstream™ transforms what was a liability into a revenue-generating asset, with zero capital required from the operator.
        </p>
      </>
    ),
  },
  'bitcoin-mining-definitive-guide': {
    content: (
      <>
        <p className="lead">
          Bitcoin mining is the process by which new bitcoins are created and transactions are verified on the Bitcoin network. This comprehensive guide covers everything from the fundamentals to advanced strategies for profitable mining operations.
        </p>

        <h2>What is Bitcoin Mining?</h2>
        <p>
          At its core, Bitcoin mining involves solving complex mathematical puzzles using specialized hardware. When a miner successfully solves a puzzle (known as "proof of work"), they earn the right to add a new block of transactions to the blockchain and receive a reward in newly minted Bitcoin.
        </p>

        <h2>Mining Hardware Evolution</h2>
        <p>
          Mining hardware has evolved dramatically since Bitcoin's inception:
        </p>
        <ul>
          <li><strong>CPU Mining (2009-2010):</strong> Early miners used standard computer processors</li>
          <li><strong>GPU Mining (2010-2013):</strong> Graphics cards offered significant performance improvements</li>
          <li><strong>ASIC Mining (2013-present):</strong> Application-Specific Integrated Circuits now dominate, offering unparalleled efficiency</li>
        </ul>

        <h2>Facility Requirements</h2>
        <p>
          Successful mining operations require careful attention to:
        </p>
        <ul>
          <li><strong>Power Infrastructure:</strong> Reliable, low-cost electricity is essential</li>
          <li><strong>Cooling Systems:</strong> Mining hardware generates substantial heat requiring effective thermal management</li>
          <li><strong>Security:</strong> Physical and digital security for valuable equipment</li>
          <li><strong>Network Connectivity:</strong> Stable internet connection for pool communication</li>
        </ul>

        <h2>Economics of Mining</h2>
        <p>
          Mining profitability depends on several factors:
        </p>
        <ul>
          <li>Bitcoin price and network difficulty</li>
          <li>Electricity costs (typically the largest operational expense)</li>
          <li>Hardware efficiency (measured in joules per terahash)</li>
          <li>Facility overhead and maintenance costs</li>
        </ul>

        <h2>The Stranded Gas Opportunity</h2>
        <p>
          One of the most compelling developments in Bitcoin mining is the use of stranded natural gas—gas that would otherwise be flared or vented due to lack of pipeline infrastructure. This approach:
        </p>
        <ul>
          <li>Reduces methane emissions by up to 98% compared to flaring</li>
          <li>Converts a waste product into revenue for oil and gas operators</li>
          <li>Provides miners with extremely low-cost electricity</li>
          <li>Creates a win-win scenario for environmental and economic outcomes</li>
        </ul>

        <h2>Future of Mining</h2>
        <p>
          The mining industry continues to evolve with:
        </p>
        <ul>
          <li>Increasing focus on renewable and stranded energy sources</li>
          <li>Growing institutional participation</li>
          <li>More efficient hardware generations</li>
          <li>Integration with grid stabilization services</li>
        </ul>

        <p>
          For operators with stranded gas assets, Bitcoin mining represents an increasingly attractive path to monetization without traditional midstream infrastructure.
        </p>
      </>
    ),
  },
  'stranded-gas-monetization-future': {
    content: (
      <>
        <p className="lead">
          The oil and gas industry faces an ongoing challenge: what to do with natural gas that's too far from pipeline infrastructure to sell economically. Traditional solutions like flaring are coming under increasing regulatory pressure, while new technologies are opening doors to profitable alternatives.
        </p>

        <h2>The Stranded Gas Problem</h2>
        <p>
          In the Permian Basin alone, operators flare billions of cubic feet of natural gas annually. This isn't laziness—it's economics. Pipeline construction costs average $10.7 million per mile, making infrastructure investment impractical for many wells, especially those with declining production curves.
        </p>

        <h2>Enter Digital Midstream™</h2>
        <p>
          Digital Midstream™ represents a paradigm shift in how we think about stranded gas monetization. Rather than moving gas to where value creation happens, we bring value creation to where the gas already is.
        </p>
        <p>
          The concept is straightforward:
        </p>
        <ol>
          <li>Deploy modular generators at the wellsite</li>
          <li>Convert stranded gas to electricity on-site</li>
          <li>Use that electricity to power Bitcoin mining or AI inference workloads</li>
          <li>Generate revenue that's shared with the operator</li>
        </ol>

        <h2>Why This Works Now</h2>
        <p>
          Several converging trends make Digital Midstream™ viable today:
        </p>
        <ul>
          <li><strong>Regulatory pressure:</strong> EPA methane fees escalating to $1,500/ton by 2026</li>
          <li><strong>Negative gas prices:</strong> Waha Hub saw negative pricing 47% of trading days in 2024</li>
          <li><strong>Compute demand:</strong> Bitcoin and AI workloads provide consistent, location-flexible power demand</li>
          <li><strong>Hardware efficiency:</strong> Modern ASICs and GPUs offer excellent power-to-revenue ratios</li>
        </ul>

        <h2>The Economic Model</h2>
        <p>
          What makes this attractive for operators is the zero-capital model. The Digital Midstream™ provider:
        </p>
        <ul>
          <li>Supplies all equipment and infrastructure</li>
          <li>Handles installation and commissioning</li>
          <li>Operates and maintains the facility</li>
          <li>Shares revenue with the operator</li>
        </ul>
        <p>
          The operator's contribution? Access to gas that would otherwise be flared.
        </p>

        <h2>Looking Ahead</h2>
        <p>
          As computing demand grows and regulatory pressure on emissions intensifies, Digital Midstream™ solutions will likely become standard practice for handling stranded gas. The operators who move early will benefit from both the revenue opportunity and regulatory compliance ahead of the curve.
        </p>
      </>
    ),
  },
  'bitcoin-mining-flare-gas-solution': {
    content: (
      <>
        <p className="lead">
          Gas flaring has long been one of the oil and gas industry's most visible environmental challenges. Now, an unlikely technology is providing a sustainable solution: Bitcoin mining.
        </p>

        <h2>The Flaring Problem</h2>
        <p>
          When oil wells produce associated natural gas but lack pipeline access, operators face limited options. Venting releases methane directly into the atmosphere (84x more potent than CO2 over 20 years). Flaring converts methane to CO2 but still wastes a valuable resource and produces emissions.
        </p>
        <p>
          In 2023, Texas alone flared over 300 billion cubic feet of natural gas—enough to power millions of homes.
        </p>

        <h2>How Bitcoin Mining Helps</h2>
        <p>
          Bitcoin mining transforms this waste stream into a productive asset:
        </p>
        <ul>
          <li><strong>98% methane reduction:</strong> Gas-fired generators combust methane far more completely than open flares</li>
          <li><strong>63% CO2e reduction:</strong> Total greenhouse gas impact drops significantly</li>
          <li><strong>Revenue generation:</strong> What was a cost center becomes a profit center</li>
          <li><strong>Regulatory compliance:</strong> Proactive solution ahead of tightening emissions rules</li>
        </ul>

        <h2>The Technology Stack</h2>
        <p>
          A typical Digital Midstream™ deployment includes:
        </p>
        <ul>
          <li>Modular natural gas generators (sized for available gas volume)</li>
          <li>Containerized data centers housing ASIC miners or AI inference GPUs</li>
          <li>Remote monitoring and control systems</li>
          <li>Emissions measurement and reporting equipment</li>
        </ul>

        <h2>Real-World Results</h2>
        <p>
          Operators partnering with Digital Midstream™ providers have seen:
        </p>
        <ul>
          <li>Immediate revenue from day one of operations</li>
          <li>Zero capital outlay required</li>
          <li>Compliance with current and upcoming methane regulations</li>
          <li>Flexibility to redeploy equipment as wells decline</li>
        </ul>

        <h2>The Bigger Picture</h2>
        <p>
          Bitcoin mining at oil wells represents a rare alignment of economic and environmental incentives. Operators make money, emissions drop, and a valuable resource gets utilized rather than wasted. It's a model that's gaining traction across the Permian Basin and beyond.
        </p>
      </>
    ),
  },
  'economics-gas-to-power-generation': {
    content: (
      <>
        <p className="lead">
          Converting stranded natural gas to electricity at the wellsite isn't just an environmental story—it's fundamentally an economic one. Here's how the numbers work.
        </p>

        <h2>The Cost of Doing Nothing</h2>
        <p>
          Before examining the upside, consider what stranded gas currently costs operators:
        </p>
        <ul>
          <li><strong>Flaring permits and fees:</strong> Direct regulatory costs that are increasing</li>
          <li><strong>Methane fees:</strong> EPA fees reaching $1,500/ton by 2026</li>
          <li><strong>Lost commodity value:</strong> Gas that could generate revenue if sold</li>
          <li><strong>ESG pressure:</strong> Investor and stakeholder concerns about emissions</li>
        </ul>

        <h2>Why Not Build a Pipeline?</h2>
        <p>
          The obvious question: why not just connect to the pipeline network? The economics typically don't work:
        </p>
        <ul>
          <li>Pipeline construction: $10.7 million per mile average</li>
          <li>Years of permitting and construction time</li>
          <li>Fixed infrastructure for declining production</li>
          <li>Negative basis differentials at Waha (47% of days in 2024)</li>
        </ul>
        <p>
          For a well producing 500 Mcf/day located 10 miles from the nearest tie-in, the pipeline economics simply don't pencil.
        </p>

        <h2>The Digital Midstream™ Alternative</h2>
        <p>
          Instead of moving gas to market, bring the market to the gas:
        </p>
        <ul>
          <li><strong>Modular deployment:</strong> Equipment can be installed in weeks, not years</li>
          <li><strong>Right-sized:</strong> Generator capacity matched to available gas</li>
          <li><strong>Mobile:</strong> Equipment redeploys when production declines</li>
          <li><strong>Zero capital:</strong> Provider handles all infrastructure investment</li>
        </ul>

        <h2>Revenue Model</h2>
        <p>
          The typical arrangement works like this:
        </p>
        <ol>
          <li>Provider assesses site and gas characteristics</li>
          <li>Provider deploys generators and computing equipment</li>
          <li>Gas powers generators, generators power computers</li>
          <li>Computing generates revenue (Bitcoin, AI workloads)</li>
          <li>Revenue is shared with operator monthly</li>
        </ol>

        <h2>Comparing Outcomes</h2>
        <p>
          For a typical well flaring 500 Mcf/day:
        </p>
        <table className="my-6">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Annual Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Continue flaring</td>
              <td>$0 revenue + increasing fees</td>
            </tr>
            <tr>
              <td>Pipeline (if available)</td>
              <td>Often negative at Waha prices</td>
            </tr>
            <tr>
              <td>Digital Midstream™</td>
              <td>Positive revenue share + compliance</td>
            </tr>
          </tbody>
        </table>

        <h2>The Bottom Line</h2>
        <p>
          Digital Midstream™ transforms stranded gas from a liability into an asset. The economics work because computing workloads can operate profitably at locations where traditional gas sales cannot—and because the provider handles all capital requirements.
        </p>
      </>
    ),
  },
  'methane-emission-standards-2025': {
    content: (
      <>
        <p className="lead">
          The regulatory landscape for methane emissions is shifting rapidly. Here's what Texas operators need to know about 2025 standards and how to prepare.
        </p>

        <h2>EPA Methane Fee Schedule</h2>
        <p>
          The Inflation Reduction Act established escalating fees on methane emissions from oil and gas facilities:
        </p>
        <ul>
          <li><strong>2024:</strong> $900 per metric ton</li>
          <li><strong>2025:</strong> $1,200 per metric ton</li>
          <li><strong>2026+:</strong> $1,500 per metric ton</li>
        </ul>
        <p>
          These fees apply to facilities reporting more than 25,000 metric tons CO2e annually.
        </p>

        <h2>What This Means for Operators</h2>
        <p>
          For operators with significant flaring or venting, these fees represent material costs:
        </p>
        <ul>
          <li>A facility venting 1,000 Mcf/day of methane faces fees exceeding $800,000/year at 2026 rates</li>
          <li>Flaring reduces but doesn't eliminate methane (incomplete combustion)</li>
          <li>Routine flaring exemptions are narrowing</li>
        </ul>

        <h2>Compliance Strategies</h2>
        <p>
          Operators have several options for reducing methane exposure:
        </p>

        <h3>1. Pipeline Connection</h3>
        <p>
          Where economically viable, connecting to gathering systems eliminates the issue. However, at $10.7M/mile construction costs and multi-year timelines, this isn't always practical.
        </p>

        <h3>2. On-Site Utilization</h3>
        <p>
          Using gas on-site—whether for compression, processing, or power generation—reduces reportable emissions. Digital Midstream™ solutions fall into this category.
        </p>

        <h3>3. Capture and Beneficial Use</h3>
        <p>
          Converting gas to power for computing workloads achieves 98% methane reduction compared to flaring, potentially qualifying for exemptions and avoiding the bulk of fee exposure.
        </p>

        <h2>Timeline Considerations</h2>
        <p>
          The fee structure creates urgency:
        </p>
        <ul>
          <li><strong>2024:</strong> First fee year—baseline exposure established</li>
          <li><strong>2025:</strong> 33% fee increase—pressure intensifies</li>
          <li><strong>2026:</strong> Full fee rate—ongoing annual cost</li>
        </ul>
        <p>
          Solutions implemented in 2025 can reduce exposure before the highest fee tier takes effect.
        </p>

        <h2>Digital Midstream™ as Compliance Solution</h2>
        <p>
          Digital Midstream™ deployments offer regulatory advantages:
        </p>
        <ul>
          <li>98% methane reduction vs flaring</li>
          <li>Documented emissions reduction for reporting</li>
          <li>Rapid deployment (weeks, not years)</li>
          <li>Zero capital requirement from operator</li>
          <li>Revenue generation from compliance activity</li>
        </ul>

        <h2>Action Items for Operators</h2>
        <ol>
          <li>Audit current flaring/venting volumes</li>
          <li>Calculate potential fee exposure at 2025/2026 rates</li>
          <li>Evaluate stranded gas monetization options</li>
          <li>Engage providers for site assessments</li>
          <li>Develop compliance timeline aligned with fee schedule</li>
        </ol>
        <p>
          The operators who act now will be positioned for compliance before the highest fee tiers take effect.
        </p>
      </>
    ),
  },
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === slug)
  const content = slug ? blogContent[slug] : undefined

  // Redirect to blog list if post not found
  if (!post || !content) {
    return <Navigate to="/blog" replace />
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={`${post.title} | 10NetZero`}
        description={post.excerpt}
        keywords={[post.category.toLowerCase(), 'stranded gas', 'digital midstream']}
        path={`/blog/${post.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: buildUrl('/') },
          { name: 'Blog', url: buildUrl('/blog') },
          { name: post.title, url: buildUrl(`/blog/${post.slug}`) },
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        author={post.author}
        url={buildUrl(`/blog/${post.slug}`)}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-900 via-gray-900 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert prose-lg
            prose-headings:font-display prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-primary
            prose-table:border-border prose-th:bg-muted prose-th:text-foreground
            prose-td:border-border prose-td:text-muted-foreground"
        >
          {content.content}
        </motion.div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mb-3 inline-block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Service Link Banner */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-primary/10 to-primary/5 border-y border-primary/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Explore Digital Midstream™</h3>
              <p className="text-muted-foreground text-sm">Our flagship solution for stranded gas monetization</p>
            </div>
          </div>
          <Link
            to="/services/digital-midstream"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Monetize Your Stranded Gas?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for a free assessment of your wellsite's revenue potential.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
