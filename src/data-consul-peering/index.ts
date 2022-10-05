// https://www.terraform.io/docs/providers/consul/d/peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/peering#id DataConsulPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/peering#partition DataConsulPeering#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/peering#peer_name DataConsulPeering#peer_name}
  */
  readonly peerName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/d/peering consul_peering}
*/
export class DataConsulPeering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_peering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/d/peering consul_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DataConsulPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_peering',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.16.2',
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
    this._partition = config.partition;
    this._peerName = config.peerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // exported_service_count - computed: true, optional: false, required: false
  public get exportedServiceCount() {
    return this.getNumberAttribute('exported_service_count');
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

  // imported_service_count - computed: true, optional: false, required: false
  public get importedServiceCount() {
    return this.getNumberAttribute('imported_service_count');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
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
      partition: cdktf.stringToTerraform(this._partition),
      peer_name: cdktf.stringToTerraform(this._peerName),
    };
  }
}
