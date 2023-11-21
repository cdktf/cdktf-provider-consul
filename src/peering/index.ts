// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering#id Peering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies KV metadata to associate with the peering. This parameter is not required and does not directly impact the cluster peering process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering#meta Peering#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering#partition Peering#partition}
  */
  readonly partition?: string;
  /**
  * The name assigned to the peer cluster. The `peer_name` is used to reference the peer cluster in service discovery queries and configuration entries such as `service-intentions`. This field must be a valid DNS hostname label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering#peer_name Peering#peer_name}
  */
  readonly peerName: string;
  /**
  * The peering token fetched from the peer cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering#peering_token Peering#peering_token}
  */
  readonly peeringToken: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering consul_peering}
*/
export class Peering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Peering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Peering to import
  * @param importFromId The id of the existing Peering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Peering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/peering consul_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PeeringConfig
  */
  public constructor(scope: Construct, id: string, config: PeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_peering',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.20.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._meta = config.meta;
    this._partition = config.partition;
    this._peerName = config.peerName;
    this._peeringToken = config.peeringToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // peer_ca_pems - computed: true, optional: false, required: false
  public get peerCaPems() {
    return this.getListAttribute('peer_ca_pems');
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_name - computed: false, optional: false, required: true
  private _peerName?: string; 
  public get peerName() {
    return this.getStringAttribute('peer_name');
  }
  public set peerName(value: string) {
    this._peerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNameInput() {
    return this._peerName;
  }

  // peer_server_addresses - computed: true, optional: false, required: false
  public get peerServerAddresses() {
    return this.getListAttribute('peer_server_addresses');
  }

  // peer_server_name - computed: true, optional: false, required: false
  public get peerServerName() {
    return this.getStringAttribute('peer_server_name');
  }

  // peering_token - computed: false, optional: false, required: true
  private _peeringToken?: string; 
  public get peeringToken() {
    return this.getStringAttribute('peering_token');
  }
  public set peeringToken(value: string) {
    this._peeringToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTokenInput() {
    return this._peeringToken;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      partition: cdktf.stringToTerraform(this._partition),
      peer_name: cdktf.stringToTerraform(this._peerName),
      peering_token: cdktf.stringToTerraform(this._peeringToken),
    };
  }
}
